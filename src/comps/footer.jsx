import React from 'react';
import '../css/footer.css';
import fb from '../imgs/fb_icon-icons.com_66689.png';
import ig from '../imgs/instagram-icon-suzem-limited-make-known-20.png';
import x from '../imgs/1690643640twitter-x-icon-png.png';
import lin from '../imgs/317750_linkedin_icon.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='B1'>
                <div className='estudiantes'>
                    <h4>Contactenos</h4>
                    <a href="./tomas">
                        <p>Tomas Castro</p>
                    </a>
                    <a href="./javier">
                        <p>Javier</p>
                    </a>
                    <a href="./julian">
                        <p>Julian </p>
                    </a>
                </div>
            </div>
            <div className='B2'>
                <h4>Redes Sociales</h4>
                <div className='SM'>
                    <a href="https://www.facebook.com/?locale=es_LA"><p><img src={fb} alt="" /></p></a>
                    <a href="https://www.instagram.com"><p><img src={ig} alt="" /></p></a>
                    <a href="https://twitter.com/?lang=es"><p><img src={x} alt="" /></p></a>
                    <a href="https://www.linkedin.com"><p><img src={lin} alt="" /></p></a>
                </div>
            </div>
        
        </div>
    )
}

export default Footer;