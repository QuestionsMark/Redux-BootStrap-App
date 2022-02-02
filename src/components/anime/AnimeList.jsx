import React from 'react';
import { useSelector } from 'react-redux';
import AddCard from '../AddCard';
import AnimeCard from './AnimeCard';

const AnimeList = () => {

    const anime = useSelector(store => store.anime);

    const animeList = () => {
        return anime.map(a => <AnimeCard key={a.id} anime={a}/>);
    };

    return ( 
        <div className="content">
            <ul className="users__list">
                {animeList()}
                <AddCard collection="anime"/>
            </ul>
        </div>
     );
}
 
export default AnimeList;