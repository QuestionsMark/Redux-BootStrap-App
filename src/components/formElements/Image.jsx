import React from 'react';
import { Form } from 'react-bootstrap';

const Image = ({ isEditForm, type, handler }) => {

    const feedbackComponent = isEditForm
    ? null
    : <>
        <Form.Control.Feedback type="valid">
            Wygląda dobrze!
        </Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
            Wybierz grafikę!
        </Form.Control.Feedback>
    </>

    return ( 
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Grafika</Form.Label>
            <Form.Control type="file" name={type} required={isEditForm ? false : true} onChange={handler}/>
            {feedbackComponent}
        </Form.Group>
     );
}
 
export default Image;