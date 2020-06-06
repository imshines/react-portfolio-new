import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Header extends Component {
    constructor() {
        super()
        this.state = {
            theme: false
        }
        this.clickHandle = this.clickHandle.bind(this)
    }

    clickHandle() {
        this.setState({
            theme: !this.state.theme
        })
    }

    render() {
        const red = {
            backgroundColor: 'black',
            color: 'white',
            transition: 'background 0.5s ease, color 0.2s ease'
        }

        const white = {
            backgroundColor: 'white',
            color: 'black',
            transition: 'background 0.5s ease, color 0.2s ease'
        }

        return (            
                <div>
                    <nav className="nav-container" style={{ fontFamily: "'Raleway', sans-serif'" }}>
                        <ul className="nav-items">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.instagram.com/imshines" target="none">Gallery</a>
                            </li>
                        </ul>
                        <label style={{ display: 'flex', alignItems: 'center' }}>
                            {this.state.theme ? 'Dark' : 'Light'}
                            <input type="checkbox" checked={this.state.theme} className="theme-toggle" onChange={this.clickHandle} style={{ marginLeft: 10 }} />
                        </label>
                    </nav>
                </div>            
        )
    }
}

export default Header