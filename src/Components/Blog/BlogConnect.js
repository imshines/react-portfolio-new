import React from 'react';
import { FaFacebook, FaInstagram, FaTelegram, FaLinkedin, FaGithub } from 'react-icons/fa';

const margin = {
    marginLeft: 15,
    marginRight: 15,
    fontSize: 30
}

const marginBottom = {
    marginBottom: 20
}

function BlogConnect(props) {
    return (
        <div>
            <h3 style={marginBottom}>Feel free to leave a message. 🙂</h3>
            <div>
                <a target="none" className="facebook" href="https://www.facebook.com/shinesemm"><FaFacebook style={margin} /></a>
                <a target="none" className="instagram" href="https://www.instagram.com/imshines"><FaInstagram style={margin} /></a>
                <a target="none" className="telegram" href="https://t.me/imshines"><FaTelegram style={margin} /></a>
            </div>
        </div>
    );
}

export default BlogConnect;