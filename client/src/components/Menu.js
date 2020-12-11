import React from 'react';
import {Link} from "react-router-dom";

const Menu = (props) => (
    <ul className="menu">
        <li>
            <Link to="/" className={'tab_day on'}>Home</Link>
        </li>
        <li>
            <Link to="/test" className={'tab_day on'}>Test</Link>
        </li>
        <li>
            <Link to="/board" className={'tab_day on'}>Board</Link>
        </li>
    </ul>
)

export default Menu;