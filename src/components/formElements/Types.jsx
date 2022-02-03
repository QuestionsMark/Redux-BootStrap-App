import React from 'react';
import { Form } from 'react-bootstrap';

const TYPES = ['Dramat', 'Romans', 'Komedia', 'Wojskowe', 'Fantasy', 'Psychologiczne', 'Tajemnica'];

const Types = ({ types, handler }) => {

    const checkBoxesList = () => {
        return TYPES.map((type, index) => {
            if (types.includes(type)) return <Form.Check key={index} type="checkbox" inline checked label={type} value={type} name="types" onChange={handler}/>;
            return <Form.Check key={index} type="checkbox" inline label={type} value={type} name="types" onChange={handler}/>;
        });
    };

    return ( 
        <Form.Group className="mb-3" controlId="types">
            <Form.Label>
                Gatunek
            </Form.Label>
            <Form.Group>
                {checkBoxesList()}
            </Form.Group>
            <Form.Text>
                Wybrano: {types.join(', ')}
            </Form.Text>
        </Form.Group>
     );
}
 
export default Types;