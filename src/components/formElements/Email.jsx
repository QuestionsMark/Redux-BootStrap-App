import React from 'react';
import { Form } from 'react-bootstrap';

const Email = ({email, handler}) => {
    return ( 
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required value={email} onChange={handler}/>
            <Form.Control.Feedback type="valid">
                Wygląda dobrze!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                Adres e-mail jest wymagany!
            </Form.Control.Feedback>
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
     );
}
 
export default Email;