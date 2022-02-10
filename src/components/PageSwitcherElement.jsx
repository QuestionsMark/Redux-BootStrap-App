import React from 'react';

import { useDispatch } from 'react-redux';
import { changeAnimePage } from '../redux/slices/anime';
import { changeUsersPage } from '../redux/slices/users';

const PageSwitcherElement = ({collection, children, page}) => {

    const dispatch = useDispatch();

    const handlePageChange = () => {
        switch (collection) {
            case 'anime':
                dispatch(changeAnimePage(page));
                break;
                
            case 'users':
                dispatch(changeUsersPage(page));
                break;
        
            default:
                break;
        }
    };

    return ( 
        <div className="page-switcher__link" onClick={handlePageChange}>
            {children}
        </div>
    );
}
 
export default PageSwitcherElement;