import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import AddCard from '../AddCard';
import PageSwitcher from '../PageSwitcher';
import AnimeCard from './AnimeCard';

import { usePagination } from '../../hooks/usePagination';
import { changeAnimePage } from '../../redux/slices/anime';

const AnimeList = () => {

    const dispatch = useDispatch();
    const { data, pageState } = usePagination('anime', '', 14);

    const animeList = useCallback(() => {
        return data.map(a => <AnimeCard key={a.id} anime={a}/>);
    }, [data]);

    const animeListComponent = useMemo(() => animeList(), [animeList]);
    const addCardComponent = useMemo(() => <AddCard collection="anime"/>, []);
    const pageSwitcherComponent = useMemo(() => <PageSwitcher collection='anime' pageState={pageState}/>, [pageState]);

    useEffect(() => {
        dispatch(changeAnimePage(1));
    }, [dispatch]);

    return ( 
        <div className="content">
            <ul className="users__list">
                {animeListComponent}
                {addCardComponent}
            </ul>
            {pageSwitcherComponent}
        </div>
     );
}
 
export default AnimeList;