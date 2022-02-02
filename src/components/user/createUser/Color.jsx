import React from 'react';
import { Form } from 'react-bootstrap';

const Color = ({color, handler}) => {
    return ( 
        <Form.Group className="mb-3">
            <Form.Label htmlFor="exampleColorInput">Kolor Profilu</Form.Label>
            <Form.Control
            type="color"
            name="color"
            id="exampleColorInput"
            value={color}
            onChange={handler}
            title="Choose your color"
            style={{width: '70px'}}
            />
        </Form.Group>
     );
}
 
export default Color;