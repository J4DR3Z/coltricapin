import React, { useState } from 'react';
import '../css/footer.css';
import fb from '../imgs/fb_icon-icons.com_66689.png';
import ig from '../imgs/instagram-icon-suzem-limited-make-known-20.png';
import x from '../imgs/1690643640twitter-x-icon-png.png';
import lin from '../imgs/317750_linkedin_icon.png';
import Popover from '@mui/material/Popover';
import tomas from '../imgs/img-estudiantes/tomas.jpg';
import javier from '../imgs/img-estudiantes/javier.jpg'
import julian from '../imgs/img-estudiantes/julian.jpg'
const Footer = () => {
    const [anchorEl1, setAnchorEl1] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);
    const [anchorEl3, setAnchorEl3] = useState(null);

    const handleClick = (event, anchorElSetter) => {
        anchorElSetter(event.currentTarget);
        event.preventDefault(); // Evitar que el enlace redireccione
    };

    const handleClose = (anchorElSetter) => {
        anchorElSetter(null);
    };

    const open1 = Boolean(anchorEl1);
    const open2 = Boolean(anchorEl2);
    const open3 = Boolean(anchorEl3);

    return (
        <div className='footer'>
            <div className='B1'>
                <div className='titulo'><h4>Contactenos</h4></div>
                <div className='estudiantes'>
                        <a href="./tomas" onClick={(event) => handleClick(event, setAnchorEl1)} className="nombre-link">
                            <p>Tomas</p>
                        </a>
                        <a href="./javier" onClick={(event) => handleClick(event, setAnchorEl2)} className="nombre-link">
                            <p>Javier</p>
                        </a>
                        <a href="./julian" onClick={(event) => handleClick(event, setAnchorEl3)} className="nombre-link">
                            <p>Julian</p>
                        </a>
                    <Popover
                        open={open1}
                        anchorEl={anchorEl1}
                        onClose={() => handleClose(setAnchorEl1)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <div className='popoverContent'>
                            <div className='popoverImage'>
                                <img src={tomas} alt="" />
                            </div>
                            <div>
                                <h4>Tomas Alejandro Castro Villarreal</h4>
                                <p>Código: 2224508</p>
                            </div>
                        </div>
                    </Popover>
                    <Popover
                        open={open2}
                        anchorEl={anchorEl2}
                        onClose={() => handleClose(setAnchorEl2)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <div className='popoverContent'>
                            <div className='popoverImage'>
                                <img src={javier} alt="" />
                            </div>
                            <div>
                                <h4>Javier David Villanueva Bernal</h4>
                                <p>Código: 2215503</p>
                            </div>
                        </div>
                    </Popover>
                    <Popover
                        open={open3}
                        anchorEl={anchorEl3}
                        onClose={() => handleClose(setAnchorEl3)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <div className='popoverContent'>
                            <div className='popoverImage'>
                                <img src={julian} alt="" />
                            </div>
                            <div>
                                <h4>Julian Andres Jaramillo Benavides</h4>
                                <p>Código: </p>
                            </div>
                        </div>
                    </Popover>
                </div>
            </div>
            <div className='B2'>
                <div className='titulo'><h4>Redes Sociales</h4></div>
                <div className='SM'>
                    <a href="https://www.facebook.com/?locale=es_LA"><img src={fb} alt="Facebook" /></a>
                    <a href="https://www.instagram.com"><img src={ig} alt="Instagram" /></a>
                    <a href="https://twitter.com/?lang=es"><img src={x} alt="Twitter" /></a>
                    <a href="https://www.linkedin.com"><img src={lin} alt="LinkedIn" /></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;