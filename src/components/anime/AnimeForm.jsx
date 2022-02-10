import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import Title from '../formElements/Title';
import Types from '../formElements/Types';
import Rate from '../formElements/Rate';
import Image from '../formElements/Image';
import ImagePreview from '../ImagePreview';
import Color from '../formElements/Color';
import Description from '../formElements/Description';

import { addAnime } from '../../redux/slices/anime';
import { useResponsePopup } from '../../contexts/ResponsePopupProvider';
import { filePreviewHandler } from '../../utils/filePreviewHandler.ts';

const AnimeForm = () => {

    const dispatch = useDispatch();

    const { setOpen, setStatus, setResponse } = useResponsePopup();

    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState('');
    const [types, setTypes] = useState([]);
    const [rate, setRate] = useState(5);
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [color, setColor] = useState('#000000');
    const [description, setDescription] = useState('');
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

        if (!image) {
            validationErrors.push('Wybierz grafikę!');
        }

        if (description.length < 50 || description.length > 10000) {
            validationErrors.push('Opis powinien zawierać od 50 do 10000 znaków!');
        }

        setErrors(validationErrors);
    }, [image, title, types, description]);

    const reset = () => {
        setTitle('');
        setRate(5);
        setImage(null);
        setPreview(null);
        setTypes([]);
    };

    const handleAddNewAnime = e => {
        e.preventDefault();
        reset();
        dispatch(addAnime({ color, description, image: preview.link, rate, title, types }));
        // Jeśli łączymy z bazą danych to trzeba sprawdzić czy status jest ok
        setOpen(true);
        setStatus(true);
        setResponse('Dodano nowe anime!');
    };

    const titleComponent = useMemo(() => <Title title={title} handler={handleDataChange}/>, [title]);
    const typesComponent = useMemo(() => <Types types={types} handler={handleDataChange}/>, [types]);
    const rateComponent = useMemo(() => <Rate rate={rate} handler={handleDataChange}/>, [rate]);
    const imageComponent = useMemo(() => <Image type={'image'} handler={handleDataChange}/>, []);
    const previewComponent = useMemo(() => preview ? <ul className="image-preview__list"><ImagePreview preview={preview}/></ul> : null, [preview]);
    const colorComponent = useMemo(() => <Color color={color} handler={handleDataChange}/>, [color]);
    const descriptionComponent = useMemo(() => <Description description={description} handler={handleDataChange}/>, [description]);
    const errorsList = useMemo(() => errors.map((e, i) => <Form.Text key={i} className="validation__text">{e}</Form.Text>), [errors.length]);

    useEffect(() => {
        checkValidation();
    }, [checkValidation]);

    return ( 
        <div className="content">
            <div className="container container--custom" style={{maxWidth: '600px'}}>
                <Form validated onSubmit={handleAddNewAnime}>
                    <h3 className="mb-3 title--center">Nowe Anime</h3>
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
                        Dodaj
                    </Button>
                    <div className="validation">
                        {errorsList}
                    </div>
                </Form>
            </div>
        </div>
     );
}
 
export default AnimeForm;