import React, { Component } from 'react'
import {
    NavLink
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
        this.setState({
            theme: !this.state.theme
        })
        this.props.sendDataToParent(this.state.theme);
    }

    render() {
        return (
            <div>
                <nav className="nav-container" style={{ fontFamily: "'Raleway', sans-serif'" }}>
                    <ul className="nav-items">
                        <li className="nav-item">
                            <NavLink exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.instagram.com/imshines" target="none">Gallery</a>
                        </li>
                    </ul>
                    <button onClick={this.sendDataToParent} style={{ padding: 5, borderRadius: 5, border: 'none', alignItems: 'center', justifyContent: 'center', display: 'flex' }} className="theme-toggle" >{this.state.theme ? <FaMoon /> : <FaSun />}</button>
                </nav>
            </div>
        )
    }
}

export default Header