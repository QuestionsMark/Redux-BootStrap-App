import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AddRoundedIcon from '@mui/icons-material/AddRounded';

const AddCard = ({collection}) => {

    const getButtonText = () => {
        switch (collection) {
            case 'users':
                return 'Użytkownika';

            case 'anime':
                return 'Anime';
        
            default:
                return;
        }
    };

    return ( 
        <li className="users__item">
            <Card className="card-add">
                <Card.Body>
                    <div className="button-container button-container--center-center">
                        <Link to={`/${collection}/add`} className="button button--add"><AddRoundedIcon className="icon"/> Dodaj {getButtonText()}</Link>
                    </div>
                </Card.Body>
            </Card>
        </li>
     );
}
 
export default AddCard;