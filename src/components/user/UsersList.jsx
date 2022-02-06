import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { usePagination } from '../../hooks/usePagination';
import AddCard from '../AddCard';
import PageSwitcher from '../PageSwitcher';

import UserCard from './UserCard';

import { updateUsersPage } from '../../actions/userActions.ts';

const UsersList = () => {

    const dispatch = useDispatch();
    const { data, pageState } = usePagination('users', '', 14);

    const usersList = useCallback(() => {
        return data.map(u => <UserCard key={u.id} user={u}/>);
    }, [data]);

    const usersListComponent = useMemo(() => usersList(), [usersList]);
    const addCardComponent = useMemo(() => <AddCard collection="users"/>, []);
    const pageSwitcherComponent = useMemo(() => <PageSwitcher collection='users' pageState={pageState}/>, [pageState]);

    useEffect(() => {
        dispatch(updateUsersPage(1));
    }, [dispatch]);

    return ( 
        <div className="content">
            <ul className="users__list">
                {usersListComponent}
                {addCardComponent}
            </ul>
            {pageSwitcherComponent}
        </div>
     );
}
 
export default UsersList;