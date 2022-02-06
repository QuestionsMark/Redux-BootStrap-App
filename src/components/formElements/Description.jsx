import React from 'react';
import { Form } from 'react-bootstrap';

const Description = ({description, handler}) => {
    return ( 
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Opis</Form.Label>
            <Form.Control as="textarea" name="description" rows={5} value={description} onChange={handler} required minLength={50} maxLength={10000}/>
            <Form.Control.Feedback type="valid">
                Wygląda dobrze!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                Opis powinien zawierać od 50 do 10000 znaków!
            </Form.Control.Feedback>
        </Form.Group>
     );
}
 
export default Description;