import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import SingleAnimePage from './SingleAnimePage';

const AnimePage = () => {

    const { animeId } = useParams();
    const animeData = useSelector(({ anime }) => anime);

    const [anime, setAnime] = useState(null);

    const animePageComponent = anime ? <SingleAnimePage anime={anime}/> : null;

    useEffect(() => {
        if (!animeData) return;
        setAnime(animeData.anime.find(u => u.id === animeId));
    }, [animeId, animeData]);

    return ( 
        <div className="content">
            {animePageComponent}
        </div>
     );
}
 
export default AnimePage;