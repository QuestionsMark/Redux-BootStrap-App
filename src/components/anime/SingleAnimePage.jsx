import React from 'react';
import { Card, Nav } from 'react-bootstrap';
import { NavLink, Routes, Route } from 'react-router-dom';

import AnimeProfile from './AnimeProfile';
import AnimeEdit from './AnimeEdit';

const SingleAnimePage = ({anime}) => {

    const { id } = anime;

    return ( 
        <div className="container container--column" style={{ flexGrow: 1 }}>
            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                        <Nav.Item>
                            <NavLink to={`/anime/${id}`} end className="nav-link">Profil</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to={`/anime/${id}/edit`} className="nav-link">Edytuj</NavLink>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Routes>
                    <Route path="/" element={<AnimeProfile anime={anime}/>}/>
                    <Route path="/edit" element={<AnimeEdit anime={anime}/>}/>
                </Routes>
            </Card>
        </div>
     );
}
 
export default SingleAnimePage;