import React from 'react';
import { Form } from 'react-bootstrap';

const Search = () => {
    return ( 
        <div className="search">
            <Form>
                <Form.Group controlId="search">
                    <Form.Control type="text" placeholder="Wyszukaj" className="search__input"/>
                </Form.Group>
            </Form>
        </div>
     );
}
 
export default Search;