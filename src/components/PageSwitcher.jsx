import React from 'react';

import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

import PageSwitcherElement from './PageSwitcherElement';

const PageSwitcher = ({pageState, collection}) => {

    const { prev, current, next, max } = pageState;

    return ( 
        <div className="page-switcher">
            {prev ? <PageSwitcherElement collection={collection} children={<KeyboardArrowLeftRoundedIcon className="page-switcher__arrow-icon" />} page={prev}/> : null}
            {prev && prev > 2 ? <PageSwitcherElement collection={collection} children={1} page={1}/> : null}
            {prev && prev > 3 ? <p className="page-switcher__more">...</p> : null}
            {prev && prev - 1 > 0 ? <PageSwitcherElement collection={collection} children={prev - 1} page={prev - 1}/> : null}
            {prev ? <PageSwitcherElement collection={collection} children={prev} page={prev}/> : null}

            <p className="page-switcher__current">{current} z {max}</p>

            {next && next < max ? <PageSwitcherElement collection={collection} children={next} page={next}/> : null}
            {next && next + 1 < max ? <PageSwitcherElement collection={collection} children={next + 1} page={next + 1}/> : null}
            {next && next + 2 < max ? <p className="page-switcher__more">...</p> : null}
            {next && next ? <PageSwitcherElement collection={collection} children={max} page={max}/> : null}
            {next && next ? <PageSwitcherElement collection={collection} children={<KeyboardArrowRightRoundedIcon className="page-switcher__arrow-icon" />} page={next}/> : null}
        </div>
     );
}
 
export default PageSwitcher;