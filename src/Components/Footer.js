import React from 'react'
import { FaReact } from 'react-icons/fa'

function Footer() {

    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
        marginTop: 30
    }

    return (
        <div style={style}>
            <p>Built with </p> <a href="https://www.reactjs.org"><FaReact style={{marginLeft: 7, fontSize: 30, color: '#1a577d'}} /></a>
        </div>
    )
}

export default Footer