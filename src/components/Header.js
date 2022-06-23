import React from 'react'
import logo from '../assets/images/github_logo.svg'
import '../assets/styles/Header.css'

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="GitHub logo" />
            <h1 className="title">GitHub Typeahead</h1>
        </div>
    );
}

export default Header;