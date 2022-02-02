import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import Username from './createUser/Username';
import Email from './createUser/Email';
import Avatar from './createUser/Avatar';
import ImagePreview from '../ImagePreview';
import Color from './createUser/Color';
import Description from './createUser/Description';

import { createUser } from '../../actions/userActions.ts';
import { filePreviewHandler } from '../../utils/filePreviewHandler.ts';
import { useResponsePopup } from '../../contexts/ResponsePopupProvider';

const UserForm = () => {

    const dispatch = useDispatch();

    const { setOpen, setStatus, setResponse } = useResponsePopup();

    const [errors, setErrors] = useState([]);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [preview, setPreview] = useState(null);
    const [color, setColor] = useState('#000000');
    const [description, setDescription] = useState('');
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

    const reset = () => {
        setUsername('');
        setEmail('');
        setAvatar(null);
        setPreview(null);
        setColor('#000000');
        setDescription('');
    };

    const handleAddNewUser = e => {
        e.preventDefault();
        reset();
        dispatch(createUser({ avatar: preview.link, color, description, email, username }));
        // Jeśli łączymy z bazą danych to trzeba sprawdzić czy status jest ok
        setOpen(true);
        setStatus(true);
        setResponse('Dodano nowego użytkownika!');
    };

    const checkValidation = useCallback(() => {
        const validationErrors = [];

        if (username.length < 2 || username.length > 25) {
            validationErrors.push('Nazwa użytkownika powinna zawierać od 2 do 25 znaków!');
        }

        if (!email || !email.includes('@')) {
            validationErrors.push('Adres e-mail jest wymagany!');
        }

        if (!avatar) {
            validationErrors.push('Wybierz zdjęcie profilowe!');
        }

        if (description.length < 50 || description.length > 10000) {
            validationErrors.push('Opis powinien zawierać od 50 do 10000 znaków!');
        }

        setErrors(validationErrors);
    }, [avatar, email, username, description]);

    const previewComponent = useMemo(() => preview ? <ul className="image-preview__list"><ImagePreview preview={preview}/></ul> : null, [preview]);

    const usernameComponent = useMemo(() => <Username username={username} handler={handleDataChange}/>, [username]);
    const emailComponent = useMemo(() => <Email email={email} handler={handleDataChange}/>, [email]);
    const avatarComponent = useMemo(() => <Avatar avatar={avatar} handler={handleDataChange}/>, [avatar]);
    const colorComponent = useMemo(() => <Color color={color} handler={handleDataChange}/>, [color]);
    const descriptionComponent = useMemo(() => <Description description={description} handler={handleDataChange}/>, [description]);

    useEffect(() => {
        checkValidation();
    }, [checkValidation]);

    return ( 
        <div className="content">
            <div className="container container--custom" style={{maxWidth: '600px'}}>
                <Form validated onSubmit={handleAddNewUser}>
                    <h3 className="mb-3 title--center">Nowy Użytkownik</h3>
                    {usernameComponent}
                    {emailComponent}
                    {avatarComponent}
                    {previewComponent}
                    {colorComponent}
                    {descriptionComponent}
                    <Button variant="warning" type="submit" disabled={errors.length > 0 ? true : false}>
                        Dodaj
                    </Button>
                </Form>
            </div>
        </div>
     );
}
 
export default UserForm;