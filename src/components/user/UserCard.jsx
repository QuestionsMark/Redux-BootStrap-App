import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteUser } from '../../actions/userActions.ts';
import { useResponsePopup } from '../../contexts/ResponsePopupProvider';

const UserCard = ({user}) => {

    const dispatch = useDispatch();

    const { setOpen, setStatus, setResponse } = useResponsePopup();

    const { id, avatar, color, description, email, username } = user;

    const handleUserDelete = () => {
        dispatch(deleteUser(id));
        // Jeśli łączymy z bazą danych to trzeba sprawdzić czy status jest ok
        setOpen(true);
        setStatus(true);
        setResponse('Użytkownik został usunięty!');
    };

    return ( 
        <li className="users__item">
            <Card style={{ width: '320px', border: 'none', borderRadius: 0, color }} className="card-hover">
                <div className="image-wrapper image-wrapper--card">
                    <Card.Img variant="top" src={avatar} className="image  image--wrapped"/>
                </div>
                <Card.Body>
                    <Card.Title className="mb-3">{username}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Email: {email}</Card.Subtitle>
                    <Card.Text className="text--limited" style={{color: 'black'}}>{description}</Card.Text>
                    <div className="button-container button-container--row button-container--end button-container--center">
                        <Link to={`/users/${id}`} className="btn btn-primary">Zobacz profil!</Link>
                        <Button variant="outline-danger" onClick={handleUserDelete}>Usuń</Button>
                    </div>
                </Card.Body>
            </Card>
        </li>
     );
}
 
export default UserCard;