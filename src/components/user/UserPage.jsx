import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import SingleUserPage from './SingleUserPage';

const UserPage = () => {

    const { userId } = useParams();
    const usersData = useSelector(({ users }) => users);

    const [user, setUser] = useState(null);

    const userPageComponent = user ? <SingleUserPage user={user}/> : null;

    useEffect(() => {
        if (!usersData) return;
        setUser(usersData.users.find(u => u.id === userId));
    }, [userId, usersData]);

    return ( 
        <div className="content">
            {userPageComponent}
        </div>
     );
}
 
export default UserPage;