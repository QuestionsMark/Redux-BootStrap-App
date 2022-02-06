import React from 'react';
import { Form } from 'react-bootstrap';

const Rate = ({ rate, handler }) => {
    return ( 
        <Form.Group className="mb-3" controlId="rate">
            <Form.Label>
                Ocena
            </Form.Label>
            <Form.Control type="number" placeholder="Rate" name="rate" min={0} max={10} step={0.5} value={rate} onChange={handler} required/>
        </Form.Group>
     );
}
 
export default Rate;