import React from 'react';
import { Form } from 'react-bootstrap';

const Image = ({ handler }) => {
    return ( 
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Grafika</Form.Label>
            <Form.Control type="file" name="image" required onChange={handler}/>
            <Form.Control.Feedback type="valid">
                Wygląda dobrze!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                Wybierz grafikę!
            </Form.Control.Feedback>
        </Form.Group>
     );
}
 
export default Image;