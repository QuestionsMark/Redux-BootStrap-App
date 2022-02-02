import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import SingleUserPage from './SingleUserPage';

const UserPage = () => {

    const { userId } = useParams();
    const users = useSelector(store => store.users);

    const [userData, setUserData] = useState(null);

    const userPageComponent = userData ? <SingleUserPage user={userData}/> : null;

    useEffect(() => {
        if (!users) return;
        setUserData(users.find(u => u.id === userId));
    }, [userId, users]);

    return ( 
        <div className="content">
            {userPageComponent}
        </div>
     );
}
 
export default UserPage;