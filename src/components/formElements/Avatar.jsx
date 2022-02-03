import React from 'react';
import { Form } from 'react-bootstrap';

const Avatar = ({handler}) => {
    return ( 
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Zdjęcie Profilowe</Form.Label>
            <Form.Control type="file" name="avatar" required onChange={handler}/>
        </Form.Group>
     );
}
 
export default Avatar;