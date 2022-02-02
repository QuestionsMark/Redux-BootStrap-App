import React from 'react';
import { useSelector } from 'react-redux';
import AddCard from '../AddCard';

import UserCard from './UserCard';

const UsersList = () => {

    const users = useSelector(store => store.users);

    const usersList = () => {
        return users.map(u => <UserCard key={u.id} user={u}/>);
    };

    return ( 
        <div className="content">
            <ul className="users__list">
                {usersList()}
                <AddCard collection="users"/>
            </ul>
        </div>
     );
}
 
export default UsersList;