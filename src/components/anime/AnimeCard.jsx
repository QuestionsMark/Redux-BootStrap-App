import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { deleteAnime } from '../../redux/slices/anime';
import { useResponsePopup } from '../../contexts/ResponsePopupProvider';

const AnimeCard = ({anime}) => {

    const { id, color, description, image, title, rate, types } = anime;

    const dispatch = useDispatch();

    const { setOpen, setStatus, setResponse } = useResponsePopup();

    const handleAnimeDelete = () => {
        dispatch(deleteAnime(id));
        // Jeśli łączymy z bazą danych to trzeba sprawdzić czy status jest ok
        setOpen(true);
        setStatus(true);
        setResponse('Anime zostało usunięte!');
    };

    return ( 
        <li className="users__item">
            <Card style={{ width: '320px', border: 'none', borderRadius: 0, color }} className="card-hover">
                <div className="image-wrapper image-wrapper--card">
                    <Card.Img variant="top" src={image} className="image image--wrapped"/>
                </div>
                <Card.Body>
                    <Card.Title className="mb-3" style={{color: 'black'}}>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Ocena: {rate}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Gatunek: {types.join(', ')}</Card.Subtitle>
                    <Card.Text className="text--limited" style={{color: 'black'}}>{description}</Card.Text>
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