import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';

import { DefaultArray } from '../../utils/defaultValues';
import { callApi } from '../../utils/callApi';

const Types = ({ types, handler }) => {

    const componentRef = useRef();

    const [formTypes, setFormTypes] = useState(new DefaultArray());
    const getTypes = async () => {
        const types = await callApi('types', []);
        if (!componentRef.current) return;
        setFormTypes(types);
    };

    const checkBoxesList = useMemo(() => {
        return formTypes.map(({ id, name }) => {
            if (types.includes(name)) return <Form.Check key={id} type="checkbox" inline checked label={name} value={name} name="types" onChange={handler}/>;
            return <Form.Check key={id} type="checkbox" inline label={name} value={name} name="types" onChange={handler}/>;
        });
    }, [formTypes, handler, types]);

    useEffect(() => {
        getTypes();
    }, []);

    return ( 
        <Form.Group className="mb-3" controlId="types" ref={componentRef}>
            <Form.Label>
                Gatunek
            </Form.Label>
            <Form.Group>
                {checkBoxesList}
            </Form.Group>
            <Form.Text>
                Wybrano: {types.join(', ')}
            </Form.Text>
        </Form.Group>
     );
}
 
export default Types;