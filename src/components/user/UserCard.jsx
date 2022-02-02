import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteUser } from '../../actions/userActions.ts';
import { useResponsePopup } from '../../contexts/ResponsePopupProvider';

const loremTexts = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur sed aperiam rerum, praesentium vitae ut facere tenetur totam repellat aliquid architecto, nihil quos mollitia!',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum deleniti porro perspiciatis unde voluptates consequatur sed aperiam rerum, praesentium vitae ut facere tenetur totam, nihil quos mollitia!',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum deleniti porro perspiciatis unde voluptates consequatur sed aperiam rerum.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum deleniti porro perspiciatis unde voluptates consequatur sed aperiam rerum, praesentium vitae ut facere tenetur totam repellat aliquid architecto, nihil quos mollitia! Illum deleniti porro perspiciatis unde voluptates.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum deleniti porro perspiciatis unde voluptates consequatur sed aperiam rerum, praesentium.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum deleniti porro perspiciatis unde voluptates consequatur sed aperiam rerum, praesentium vitae ut facere tenetur totam repellat aliquid architecto, nihil quos mollitia!',
]

const UserCard = ({user}) => {

    const dispatch = useDispatch();

    const { setOpen, setStatus, setResponse } = useResponsePopup();

    const { id, avatar, color, email, username } = user;

    const lorem = loremTexts[Math.floor(Math.random() * loremTexts.length)];

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
                <Card.Img variant="top" src={avatar} />
                <Card.Body>
                    <Card.Title className="mb-3">{username}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Email: {email}</Card.Subtitle>
                    <Card.Text style={{color: 'black'}}>{lorem}</Card.Text>
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