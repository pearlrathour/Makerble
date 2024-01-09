import React from 'react';
import logo from '../assets/logo2.png';
import '../index.css';
import { BellIcon, EnvelopeIcon, FireIcon, UserCircleIcon } from '@heroicons/react/24/solid';

export default function App() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="d-flex flex-row">
                <img src={logo} className="height-[1%] width-[10%]" alt="Makerble" />
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form>
                        <input className="form-control me-2" type="search" placeholder="Search for contacts and projects" aria-label="Search" />
                    </form>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                My Apps
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">Action 1</a></li>
                                <li><a className="dropdown-item" href="/">Action 2</a></li>
                                <li className="divider"></li>
                                <li><a className="dropdown-item" href="/">Separated link</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Explore</a>
                        </li>
                    </ul>
                </div>
                <div className='d-flex flex-column'>
                    <BellIcon className="icon text-dark" />
                    <EnvelopeIcon className="icon text-dark" />
                    <FireIcon className="icon text-dark" />
                    <UserCircleIcon className="icon text-dark" />
                </div>
            </div>
        </nav>
    );
}