import React from 'react'
import Photo from '../assets/me.jpg'
import { FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa';

function Home() {

    const imageStyle = {
        width: 150,
        height: 150,
        borderRadius: '50%',
    }

    const marginY = {
        marginTop: 50,
        marginBottom: 50
    }

    const listStyle = {
        listStyleType: 'disc'
    }

    const justifyLogo = {
        display: 'flex',
        justifyContent: 'center'
    }

    const margin = {
        marginLeft: 15,
        marginRight: 15,
        fontSize: 30
    }

    const marginBottom = {
        marginBottom: 20
    }

    return (
        <div className="home-container">
            <main className="hero">
                <h2>Hello there!</h2>
                <h1>I'm Mohan</h1>
                <h2 style={marginBottom}>Web Developer, UI Designer, Tech Enthusiast</h2>
                <p>I build WebApps with high-fidelity user interface and well optimized apps which can run on both Desktop and Mobile with better performance.</p>
            </main>
            <section className="about" style={marginY}>
                <div><img src={Photo} style={imageStyle} aria-hidden alt="mohans photo" /></div>
                <h2 style={marginBottom}>Mohan Kumar</h2>
                <div style={marginBottom}>
                    <p style={{ textIndent: 20, marginBottom: 10 }}>Bachelors in Computer Science Engineering Student. I'm intrested in tech and learning about new emerging technologies, I chose my path as a Web Developer in order to build Web Apps and Mobile Apps using JavaScript since it is my favorite language.</p>
                    <p style={{ textIndent: 20 }}>I love to play Games and binge watch TV Series and Movies also take photographs as a hobby.</p>
                </div>
                <h3 style={marginBottom}>Some of my skills,</h3>
                <ul style={listStyle}>
                    <li>HTML, CSS, JavaScript</li>
                    <li>ReactJS</li>
                    <li>React Native</li>
                    <li>Nodejs / Express</li>
                    <li>Laravel</li>
                    <li>Figma, Adobe XD</li>
                    <li>Photoshop</li>
                </ul>
            </section>
            <section className="works">
                <h3 style={marginBottom}>My Works</h3>
                <ul>
                    <li>Static Webisites (SkyAlpha, Saravanainteriorworks.com)</li>
                    <li>JusTees (ReactJS e-comm frontend)</li>
                    <li>HealthCare Bot App</li>
                </ul>
            </section>
            <section className="connect">
                <h3 style={marginBottom}>Connect With Me</h3>
                <div style={justifyLogo}>
                    <a target="none" className="instagram" href="https://www.instagram.com/web.snips"><FaInstagram style={margin} /></a>
                    <a target="none" className="github" href="https://www.github.com/imshines"><FaGithub style={margin} /></a>
                    <a target="none" className="facebook" href="https://www.twitter.com/shinestwee"><FaTwitter style={margin} /></a>
                </div>
            </section>
        </div>
    )
}

export default Home
