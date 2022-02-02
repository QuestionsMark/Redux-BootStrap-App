import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { deleteAnime } from '../../actions/animeActions.ts';
import { useResponsePopup } from '../../contexts/ResponsePopupProvider';

const loremTexts = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur sed aperiam rerum, praesentium vitae ut facere tenetur totam repellat aliquid architecto, nihil quos mollitia!',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum deleniti porro perspiciatis unde voluptates consequatur sed aperiam rerum, praesentium vitae ut facere tenetur totam, nihil quos mollitia!',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum deleniti porro perspiciatis unde voluptates consequatur sed aperiam rerum.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum deleniti porro perspiciatis unde voluptates consequatur sed aperiam rerum, praesentium vitae ut facere tenetur totam repellat aliquid architecto, nihil quos mollitia! Illum deleniti porro perspiciatis unde voluptates.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum deleniti porro perspiciatis unde voluptates consequatur sed aperiam rerum, praesentium.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum deleniti porro perspiciatis unde voluptates consequatur sed aperiam rerum, praesentium vitae ut facere tenetur totam repellat aliquid architecto, nihil quos mollitia!',
];

const colors = [
    '#ffb700',
    '#E0005A',
    '#2883FB',
    '#0A8F00',
    '#FFA914'
 ];

const AnimeCard = ({anime}) => {

    const { id, image, title, rate, types } = anime;

    const dispatch = useDispatch();

    const { setOpen, setStatus, setResponse } = useResponsePopup();

    const lorem = loremTexts[Math.floor(Math.random() * loremTexts.length)];

    const getColor = () => colors[Math.floor(Math.random() * colors.length)];

    const handleAnimeDelete = () => {
        dispatch(deleteAnime(id));
        // Jeśli łączymy z bazą danych to trzeba sprawdzić czy status jest ok
        setOpen(true);
        setStatus(true);
        setResponse('Anime zostało usunięte!');
    };

    return ( 
        <li className="users__item">
            <Card style={{ width: '320px', border: 'none', borderRadius: 0, color: getColor() }} className="card-hover">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="mb-3" style={{color: 'black'}}>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Ocena: {rate}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Gatunek: {types.join(', ')}</Card.Subtitle>
                    <Card.Text style={{color: 'black'}}>{lorem}</Card.Text>
                    <div className="button-container button-container--row button-container--end button-container--center">
                        <Link to={`/anime/${id}`} className="btn btn-primary">Czytaj dalej!</Link>
                        <Button variant="outline-danger" onClick={handleAnimeDelete}>Usuń</Button>
                    </div>
                </Card.Body>
            </Card>
        </li>
     );
}
 
export default AnimeCard;