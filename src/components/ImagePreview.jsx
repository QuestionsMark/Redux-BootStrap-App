import React from 'react';

const ImagePreview = ({preview}) => {

    const { name, size, link } = preview;

    return ( 
        <li className="image-preview__item image-preview__item-column">
            <div className="image-wrapper image-wrapper--preview">
                <img src={link} alt="" className="image image--wrapped" />
            </div>
            <div className="image-preview__info">
                <p className="image-preview__info-item"><span className="bold">name:</span> {name}</p>
                <p className="image-preview__info-item"><span className="bold">size:</span> {(size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
        </li>
     );
}
 
export default ImagePreview;