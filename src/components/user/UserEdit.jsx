import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import ImagePreview from '../ImagePreview';

import { editUser } from '../../actions/userActions.ts';
import { filePreviewHandler } from '../../utils/filePreviewHandler.ts';
import { useResponsePopup } from '../../contexts/ResponsePopupProvider';

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

    useEffect(() => {
        checkValidation();
    }, [checkValidation]);

    return ( 
        <Card.Body>
            <Card.Title>Edytuj Profil</Card.Title>
            <Form validated onSubmit={handleEditUser}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Nazwa Użytkownika</Form.Label>
                        <Form.Control type="text" name="username" placeholder="Username" required minLength="2" maxLength="25" value={username} onChange={handleDataChange}/>
                        <Form.Control.Feedback type='valid'>
                            Wygląda dobrze!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid'>
                            Nazwa użytkownika powinna zawierać od 2 do 25 znaków!
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required value={email} onChange={handleDataChange}/>
                        <Form.Control.Feedback type="valid">
                            Wygląda dobrze!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Adres e-mail jest wymagany!
                        </Form.Control.Feedback>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Zdjęcie Profilowe</Form.Label>
                        <Form.Control type="file" name="avatar" onChange={handleDataChange}/>
                    </Form.Group>
                    {previewComponent}
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
                        <Form.Control
                        type="color"
                        name="color"
                        id="exampleColorInput"
                        value={color}
                        onChange={handleDataChange}
                        title="Choose your color"
                        style={{width: '70px'}}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Opis</Form.Label>
                        <Form.Control as="textarea" name="description" rows={5} value={description} onChange={handleDataChange} required minLength={50} maxLength={10000}/>
                    </Form.Group>
                    <Button variant="warning" type="submit" disabled={errors.length > 0 ? true : false}>
                        Aktualizuj
                    </Button>
                </Form>
        </Card.Body>
     );
}
 
export default UserProfile;