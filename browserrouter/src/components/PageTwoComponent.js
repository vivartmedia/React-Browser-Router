import React from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export default function PageTwoComponent() {
    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        This is page toooooooooooooooooooooooooo.
                    </p>
                    <Link to={'/'} >
                        go home bb
                    </Link>
                </header>
            </div>
        </div>
    )
}