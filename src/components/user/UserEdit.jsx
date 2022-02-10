import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card, Form } from 'react-bootstrap';

import ImagePreview from '../ImagePreview';
import Username from '../formElements/Username';
import Email from '../formElements/Email';
import Color from '../formElements/Color';
import Description from '../formElements/Description';
import Image from '../formElements/Image';

import { editUser } from '../../redux/slices/users';
import { useResponsePopup } from '../../contexts/ResponsePopupProvider';
import { filePreviewHandler } from '../../utils/filePreviewHandler.ts';

const UserProfile = ({user}) => {

    const { id, avatar: _avatar, color: _color, description: _description, email: _email, username: _username } = user;

    const dispatch = useDispatch();

    const { setOpen, setStatus, setResponse } = useResponsePopup();

    const [errors, setErrors] = useState([]);

    const [username, setUsername] = useState(_username);
    const [email, setEmail] = useState(_email);
    const [avatar, setAvatar] = useState(null);
    const [preview, setPreview] = useState({
        name: 'Actual image',
        size: 0,
        link: _avatar,
    });
    const [color, setColor] = useState(_color);
    const [description, setDescription] = useState(_description);
    const handleDataChange = ({ target }) => {
        const dataName = target.name;
        switch (dataName) {
            case 'username':
                setUsername(target.value);
                break;

            case 'email':
                setEmail(target.value);
                break;

            case 'avatar':
                const file = target.files[0];
                if (file) { 
                    setAvatar(file);
                    filePreviewHandler(setPreview, file);
                } else {
                    setAvatar(null);
                    setPreview(null);
                }
                break;

            case 'color':
                setColor(target.value);
                break;

            case 'description':
                setDescription(target.value);
                break;
        
            default:
                break;
        }
    };

    const handleEditUser = e => {
        e.preventDefault();
        dispatch(editUser({ id, avatar: preview.link, color, description, email, username }));
        // Jeśli łączymy z bazą danych to trzeba sprawdzić czy status jest ok
        setOpen(true);
        setStatus(true);
        setResponse('Zaktualizowano dane o użytkowniku!');
    };

    const checkValidation = useCallback(() => {
        const validationErrors = [];

        if (username.length < 2 || username.length > 25) {
            validationErrors.push('Nazwa użytkownika powinna zawierać od 2 do 25 znaków!');
        }

        if (!email || !email.includes('@')) {
            validationErrors.push('Adres e-mail jest wymagany!');
        }

        if (description.length < 50 || description.length > 10000) {
            validationErrors.push('Opis powinien zawierać od 50 do 10000 znaków!');
        }

        if (username === _username && email === _email && !avatar && color === _color && description === _description) {
            validationErrors.push('Nie zauważono żadnych zmian!');
        }

        setErrors(validationErrors);
    }, [avatar, email, username, description, color, _email, _description, _color, _username]);

    const previewComponent = useMemo(() => preview ? <ul className="image-preview__list"><ImagePreview preview={preview}/></ul> : null, [preview]);
    const usernameComponent = useMemo(() => <Username username={username} handler={handleDataChange}/>, [username]);
    const emailComponent = useMemo(() => <Email email={email} handler={handleDataChange}/>, [email]);
    const avatarComponent = useMemo(() => <Image isEditForm type={'avatar'} handler={handleDataChange}/>, []);
    const colorComponent = useMemo(() => <Color color={color} handler={handleDataChange}/>, [color]);
    const descriptionComponent = useMemo(() => <Description description={description} handler={handleDataChange}/>, [description]);
    const errorsList = useMemo(() => {
        return errors.map((e, i) => <Form.Text key={i} className="validation__text">{e}</Form.Text>);
    }, [errors.length]);

    useEffect(() => {
        checkValidation();
    }, [checkValidation]);

    return ( 
        <Card.Body>
            <Card.Title>Edytuj Profil</Card.Title>
            <Form validated onSubmit={handleEditUser}>
                {usernameComponent}
                {emailComponent}
                {avatarComponent}
                {previewComponent}
                {colorComponent}
                {descriptionComponent}
                <Button
                variant="warning"
                type="submit"
                disabled={errors.length > 0 ? true : false}
                >
                    Zaktualizuj
                </Button>
                <div className="validation">
                    {errorsList}
                </div>
            </Form>
        </Card.Body>
     );
}
 
export default UserProfile;