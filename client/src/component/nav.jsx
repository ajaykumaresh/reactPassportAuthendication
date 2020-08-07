import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">React App</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/a/dashboard">Dash Board</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </li>

                    </ul>

                </div>
                <ul className="nav navbar-nav navbar-right nav-item">
                    <li><Link to="/signup" className="nav-link"><span className="glyphicon glyphicon-user"></span> Sign Up  </Link></li>
                    <li><Link to="/signin" className="nav-link"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                </ul>
            </nav>
        )
    }
}