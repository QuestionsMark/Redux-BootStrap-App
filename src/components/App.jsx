import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Background from './Background';
import Header from './header/Header';
import Footer from './Footer';
import Home from './Home';
import UsersList from './user/UsersList';
import UserForm from './user/UserForm';
import AnimeList from './anime/AnimeList';
import AnimeForm from './anime/AnimeForm';
import UserPage from './user/UserPage';
import AnimePage from './anime/AnimePage';

import { fetchAnime } from '../redux/slices/anime';
import { fetchUsers } from '../redux/slices/users';
import ResponsePopup from './ResponsePopup';

function App() {

    const html = useRef(document.querySelector('html'));
    const location = useLocation();
    const { anime, users } = useSelector(store => store);
    const dispatch = useDispatch();
    // const store = useSelector(store => store);
    // console.log(store);

    const setApp = useCallback(async () => {
        dispatch(fetchAnime());
        dispatch(fetchUsers());
    }, [dispatch]);

    useEffect(() => {
        setApp();
    }, [setApp]);

    useEffect(() => {
        html.current.scroll({
            behavior: 'smooth',
            top: 0
        });
    }, [location, anime.page, users.page]);

    return (
        <>
        {useMemo(() => <>
            <Background />
            <div className="app">
                <Header />
                <main className="main">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="users" element={<UsersList />}/>
                        <Route path="users/add" element={<UserForm />}/>
                        <Route path="users/:userId/*" element={<UserPage />}/>
                        <Route path="anime" element={<AnimeList />}/>
                        <Route path="anime/add" element={<AnimeForm />}/>
                        <Route path="anime/:animeId/*" element={<AnimePage />}/>
                    </Routes>
                </main>
                <Footer />
            </div>
            <ResponsePopup />
        </>, [])}
        </>
    );
}

export default App;
