import React from 'react';
import {Link} from "react-router-dom";

const Menu = (props) => (
    <ul className="menu">
        <li>
            <Link to="/" className={'tab_day on'}> 전체 목록 </Link>
        </li>
        <li>
            <Link to="/search" className={'tab_day on'}> 검색 </Link>
        </li>
        <li>
            <Link to="/crud" className={'tab_day on'}>CRUD</Link>
        </li>
    </ul>
)

export default Menu;