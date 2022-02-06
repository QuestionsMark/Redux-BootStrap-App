import React from 'react';
import { Card } from 'react-bootstrap';
import { HOST_ADDRESS } from '../../config';

const AnimeProfile = ({anime}) => {
    
    const { id, image, title, rate, types, description, color } = anime;

    const shortLorem = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis quaerat ad quidem repudiandae eos id magnam suscipit dolores libero molestiae tempora accusantium, possimus deleniti necessitatibus voluptates officiis ipsa corrupti itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab adipisci quo itaque voluptatum nam veniam accusantium aspernatur quidem esse ullam, molestias, non magni. Quidem voluptatem quisquam inventore, iusto reprehenderit beatae.';

    const paragraphsList = () => {
        return description.split(/\r?\n/).map((p, i) => <Card.Text key={i} style={{textIndent: '30px', textAlign: 'justify'}}>{p}</Card.Text>);
    };

    return ( 
        <Card.Body>
            <Card.Header className="card__header">
                <div className="image-wrapper image-wrapper--profile">
                    <Card.Img variant="top" src={`${HOST_ADDRESS}/images/${image}`} className="image image--wrapped"/>
                </div>
                <Card.Body className="body--flex">
                    <Card.Title className="mb-3" style={{color: color}}>{title}</Card.Title>
                    <Card.Subtitle className="mb-2">{types.join(', ')}</Card.Subtitle>
                    <Card.Subtitle className="mb-2">Ocena: {rate}</Card.Subtitle>
                    <Card.Text style={{textIndent: '20px' , textAlign: 'justify'}}>{shortLorem}</Card.Text>
                </Card.Body>
            </Card.Header>
            <Card.Body>
                <Card.Title>Opis</Card.Title>
                {paragraphsList()}
            </Card.Body>
        </Card.Body>
     );
}
 
export default AnimeProfile;