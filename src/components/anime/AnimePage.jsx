import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import SingleAnimePage from './SingleAnimePage';

const AnimePage = () => {

    const { animeId } = useParams();
    const anime = useSelector(({ anime }) => anime);

    const [animeData, setAnimeData] = useState(null);

    const animePageComponent = animeData ? <SingleAnimePage anime={animeData}/> : null;

    useEffect(() => {
        if (!anime) return;
        setAnimeData(anime.find(u => u.id === animeId));
    }, [animeId, anime]);

    return ( 
        <div className="content">
            {animePageComponent}
        </div>
     );
}
 
export default AnimePage;