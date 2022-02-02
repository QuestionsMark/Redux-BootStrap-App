import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import img1 from '../media/img/img1.webp';
import img2 from '../media/img/img2.webp';
import img3 from '../media/img/img3.webp';

const Background = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return ( 
        <div className="background">
            <Carousel fade activeIndex={index} onSelect={handleSelect} pause={false} indicators={false} controls={false} interval={10000}>
                <Carousel.Item>
                    <img
                    className="image image-carousel image-cover"
                    src={img1}
                    alt="First slide"
                    draggable={false}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="image image-carousel image-cover"
                    src={img2}
                    alt="Second slide"
                    draggable={false}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="image image-carousel image-cover"
                    src={img3}
                    alt="Third slide"
                    draggable={false}
                    />
                </Carousel.Item>
            </Carousel>
            <div className="curtain" />
        </div>
     );
}
 
export default Background;