import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Card, Nav } from 'react-bootstrap';

import UserProfile from './UserProfile';
import UserEdit from './UserEdit';

const SingleUserPage = ({user}) => {

    const { id } = user;

    return ( 
        <div className="container container--column" style={{ flexGrow: 1 }}>
            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                        <Nav.Item>
                            <NavLink to={`/users/${id}`} end className="nav-link">Profil</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to={`/users/${id}/edit`} className="nav-link">Edytuj</NavLink>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Routes>
                    <Route path="/" element={<UserProfile user={user}/>}/>
                    <Route path="/edit" element={<UserEdit user={user}/>}/>
                </Routes>
            </Card>
        </div>
     );
}
 
export default SingleUserPage;