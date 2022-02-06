import React from 'react';

import { useDispatch } from 'react-redux';
import { updateAnimePage } from '../actions/animeActions.ts';
import { updateUsersPage } from '../actions/userActions.ts';

const PageSwitcherElement = ({collection, children, page}) => {

    const dispatch = useDispatch();

    const handlePageChange = () => {
        switch (collection) {
            case 'anime':
                dispatch(updateAnimePage(page));
                break;
                
            case 'users':
                dispatch(updateUsersPage(page));
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