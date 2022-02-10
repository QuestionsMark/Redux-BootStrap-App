import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import Title from '../formElements/Title';
import Types from '../formElements/Types';
import Rate from '../formElements/Rate';
import Image from '../formElements/Image';
import ImagePreview from '../ImagePreview';
import Color from '../formElements/Color';
import Description from '../formElements/Description';

import { useResponsePopup } from '../../contexts/ResponsePopupProvider';
import { editAnime } from '../../redux/slices/anime';
import { filePreviewHandler } from '../../utils/filePreviewHandler.ts';

const AnimeEdit = ({anime}) => {

    const { id, color: _color, description: _description, image: _image, rate: _rate, title: _title, types: _types } = anime;

    const dispatch = useDispatch();

    const { setOpen, setStatus, setResponse } = useResponsePopup();

    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState(_title);
    const [types, setTypes] = useState(_types);
    const [rate, setRate] = useState(_rate);
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState({
        name: 'Aktualna grafika',
        size: 0,
        link: _image,
    });
    const [color, setColor] = useState(_color);
    const [description, setDescription] = useState(_description);
    const handleDataChange = ({ target }) => {
        const dataName = target.name;
        switch (dataName) {
            case 'title':
                setTitle(target.value);
                break;

            case 'rate':
                setRate(Number(target.value));
                break;

            case 'image':
                const file = target.files[0];
                if (file) { 
                    setImage(file);
                    filePreviewHandler(setPreview, file);
                } else {
                    setImage(null);
                    setPreview(null);
                }
                break;

            case 'types':
                const value = target.value;
                setTypes(prev => prev.findIndex(type => type === value) !== -1 ? prev.filter(type => type !== value) : [...prev, value]);
                break;

            case 'color':
                setColor(target.value);
                break;

            case 'description':
                setDescription(target.value);
                break;
        
            default:
                break;
        }
    };

    const checkValidation = useCallback(() => {
        const validationErrors = [];

        if (title.length < 1 || title.length > 100) {
            validationErrors.push('Nazwa użytkownika powinna zawierać od 1 do 100 znaków!');
        }

        if (types.length < 1) {
            validationErrors.push('Anime musi zawierać conajmniej jeden gatunek!');
        }

        if (
            title === _title
            && JSON.stringify(types) === JSON.stringify(_types)
            && rate === _rate
            && !image
            && color === _color
            && description === _description
        ) {
            validationErrors.push('Nie zauważono żadnych zmian!');
        }

        setErrors(validationErrors);
    }, [_color, _description, _rate, _title, _types, color, description, image, rate, title, types]);

    const handleEditAnime = e => {
        e.preventDefault();
        dispatch(editAnime({ id, color, description, image: preview.link, rate, title, types }));
        // Jeśli łączymy z bazą danych to trzeba sprawdzić czy status jest ok
        setOpen(true);
        setStatus(true);
        setResponse('Zaktualizowano dane o anime!');
    };

    const titleComponent = useMemo(() => <Title title={title} handler={handleDataChange}/>, [title]);
    const typesComponent = useMemo(() => <Types types={types} handler={handleDataChange}/>, [types]);
    const rateComponent = useMemo(() => <Rate isEditForm rate={rate} handler={handleDataChange}/>, [rate]);
    const imageComponent = useMemo(() => <Image isEditForm type={'image'} handler={handleDataChange}/>, []);
    const previewComponent = useMemo(() => preview ? <ul className="image-preview__list"><ImagePreview preview={preview}/></ul> : null, [preview]);
    const colorComponent = useMemo(() => <Color color={color} handler={handleDataChange}/>, [color]);
    const descriptionComponent = useMemo(() => <Description description={description} handler={handleDataChange}/>, [description]);
    const errorsList = useMemo(() => errors.map((e, i) => <Form.Text key={i} className="validation__text">{e}</Form.Text>), [errors.length]);

    useEffect(() => {
        checkValidation();
    }, [checkValidation]);

    return ( 
        <Card.Body>
            <Card.Title>Edytuj Profil</Card.Title>
            <Form validated onSubmit={handleEditAnime}>
                {titleComponent}
                {typesComponent}
                {rateComponent}
                {imageComponent}
                {previewComponent}
                {colorComponent}
                {descriptionComponent}
                <Button
                variant="warning"
                type="submit"
                disabled={errors.length > 0 ? true : false}
                >
                    Aktualizuj
                </Button>
                <div className="validation">
                    {errorsList}
                </div>
            </Form>
        </Card.Body>
     );
}
 
export default AnimeEdit;