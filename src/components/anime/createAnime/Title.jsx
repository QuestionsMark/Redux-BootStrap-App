import React from 'react';
import { Form } from 'react-bootstrap';

const Title = ({ title, handler }) => {
    return ( 
        <Form.Group className="mb-3" controlId="title">
            <Form.Label>
                Tytuł
            </Form.Label>
            <Form.Control type="text" placeholder="Tytuł" name="title" value={title} onChange={handler} required minLength={1} maxLength={100}/>
            <Form.Control.Feedback type="valid">
                Wygląda dobrze!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                Tytuł powinien zawierać od 1 do 100 znaków!
            </Form.Control.Feedback>
        </Form.Group>
     );
}
 
export default Title;