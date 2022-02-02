import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ImagePreview from '../ImagePreview';
import Rate from './createAnime/Rate';
import Title from './createAnime/Title';
import Types from './createAnime/Types';

import { filePreviewHandler } from '../../utils/filePreviewHandler.ts';
import Image from './createAnime/Image';
import { useDispatch } from 'react-redux';

import { addAnime } from '../../actions/animeActions.ts';
import { useResponsePopup } from '../../contexts/ResponsePopupProvider';

const AnimeForm = () => {

    const dispatch = useDispatch();

    const { setOpen, setStatus, setResponse } = useResponsePopup();

    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState('');
    const [types, setTypes] = useState([]);
    const [rate, setRate] = useState(5);
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
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

        setErrors(validationErrors);
    }, [image, title, types]);

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
        dispatch(addAnime({ title, rate, types, image: preview.link }));
        // Jeśli łączymy z bazą danych to trzeba sprawdzić czy status jest ok
        setOpen(true);
        setStatus(true);
        setResponse('Dodano nowe anime!');
    };

    const titleComponent = useMemo(() => <Title title={title} handler={handleDataChange}/>, [title]);
    const typesComponent = useMemo(() => <Types types={types} handler={handleDataChange}/>, [types]);
    const rateComponent = useMemo(() => <Rate rate={rate} handler={handleDataChange}/>, [rate]);
    const imageComponent = useMemo(() => <Image handler={handleDataChange}/>, []);
    const previewComponent = useMemo(() => preview ? <ul className="image-preview__list"><ImagePreview preview={preview}/></ul> : null, [preview]);

    useEffect(() => {
        checkValidation();
    }, [checkValidation]);

    return ( 
        <div className="content">
            <div className="container container--custom" style={{maxWidth: '400px'}}>
                <Form validated onSubmit={handleAddNewAnime}>
                    <h3 className="mb-3 title--center">Nowe Anime</h3>
                    {titleComponent}
                    {typesComponent}
                    {rateComponent}
                    {imageComponent}
                    {previewComponent}
                    <Button
                    variant="warning"
                    type="submit"
                    disabled={errors.length > 0 ? true : false}
                    >
                        Dodaj
                    </Button>
                </Form>
            </div>
        </div>
     );
}
 
export default AnimeForm;