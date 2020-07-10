import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";
import { FaSun, FaMoon } from 'react-icons/fa';

class Header extends Component {
    constructor() {
        super()
        this.state = {
            theme: true
        }
        this.clickHandle = this.clickHandle.bind(this)
    }

    clickHandle() {
        this.setState({
            theme: !this.state.theme
        })
    }

    sendDataToParent = () => {
        this.props.sendDataToParent(this.state.theme);
    }

    render() {
        return (
            <div /* className={this.state.theme ? 'dark-mode' : 'light-mode'} */>
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
                        {this.state.theme ? <FaMoon /> : <FaSun />}
                        <input type="checkbox" checked={this.state.theme} className="theme-toggle" onChange={this.clickHandle} onClick={this.sendDataToParent} style={{ marginLeft: 10 }} />
                    </label>
                </nav>
            </div>
        )
    }
}

export default Header