import React from 'react';
import { Form } from 'react-bootstrap';

const Username = ({username, handler}) => {
    return ( 
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nazwa Użytkownika</Form.Label>
            <Form.Control type="text" name="username" placeholder="Username" required minLength="2" maxLength="25" value={username} onChange={handler}/>
            <Form.Control.Feedback type='valid'>
                Wygląda dobrze!
            </Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>
                Nazwa użytkownika powinna zawierać od 2 do 25 znaków!
            </Form.Control.Feedback>
        </Form.Group>
     );
}
 
export default Username;