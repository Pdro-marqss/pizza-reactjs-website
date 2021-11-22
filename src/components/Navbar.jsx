import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ReorderIcon from '@mui/icons-material/Reorder';
import Logo from '../assets/pizzaLogo.png';

import '../styles/Navbar.css'


function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks); //! oposto do valor booleano atual
    }

    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={Logo} alt="Logo" />
                <div className="hiddenLinks">
                <Link to="/"> Home </Link>
                <Link to="/menu"> Menu </Link>
                <Link to="/sobre"> Sobre </Link>
                <Link to="/contato"> Contato </Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/"> Home </Link>
                <Link to="/menu"> Menu </Link>
                <Link to="/sobre"> Sobre </Link>
                <Link to="/contato"> Contato </Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon/>
                </button>
            </div>
        </div>
    );
}

export default Navbar;
