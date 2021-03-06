import React from 'react';
import {Link} from 'react-router-dom';
import './style/Header.css';

const Header = () => {
    return(
        <div className="Header" >
            <Link to="/" className="link" >List</Link>
        </div>
    );
};
export default Header;