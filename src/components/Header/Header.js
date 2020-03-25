import React from 'react';

import './style.css'

function Header() {
    return(
        <header id="menu-top">
        <nav>
           <img src="https://i.imgur.com/KDIDiSE.png" />
        <div className="profile">
            <span>Meu perfil</span>
            <i className="material-icons">account_circle</i>
        </div>
        </nav>
        </header>
    );   
}
export default Header;
