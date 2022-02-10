import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Modal } from 'react-bootstrap';

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

import { useResponsePopup } from '../contexts/ResponsePopupProvider';
import { setAnime } from '../redux/slices/anime';
import { setUsers } from '../redux/slices/users';
import { callApi } from '../utils/callApi';

function App() {

    const { open, setOpen, status, response } = useResponsePopup();

    const html = useRef(document.querySelector('html'));
    const location = useLocation();
    const { page: animePage } = useSelector(({anime}) => anime);
    const { page: usersPage } = useSelector(({users}) => users);
    const dispatch = useDispatch();

    const handleCloseResponsePopup = () => {
        setOpen(false);
    };

    const setApp = async () => {
        const anime = await callApi('anime/card-info', []);
        const users = await callApi('users/card-info', []);
        dispatch(setAnime(anime));
        dispatch(setUsers(users));
    };

    useEffect(() => {
        setApp();
    }, [dispatch]);

    useEffect(() => {
        html.current.scroll({
            behavior: 'smooth',
            top: 0
        });
    }, [location, animePage, usersPage]);

    return (
        <>
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
        <Modal
        show={open}
        onHide={handleCloseResponsePopup}
        backdrop="static"
        keyboard={false}
        >
            <Alert variant={status ? 'success' : 'danger'}>
                <Modal.Header closeButton>
                    <Modal.Title>{status ? 'Sukces!' : 'Błąd!'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {response}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseResponsePopup}>
                        Close
                    </Button>
                </Modal.Footer>
            </Alert>
        </Modal>
        </>
    );
}

export default App;
