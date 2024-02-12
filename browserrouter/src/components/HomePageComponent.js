


import React from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export default function HomePageComponent() {
    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        This is trhe HomePageComponent
                    </p>
                    <Link to={'pageTwo'}>
                        go to page two
                    </Link>
                </header>
            </div>
        </div>
    )
}
