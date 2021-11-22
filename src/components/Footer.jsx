import React from 'react'

//Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

//css
import '../styles/Footer.css'


function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <GitHubIcon />
                <LinkedInIcon />
            </div>
            <p> &copy; 2021 Pedro's Pizza</p>
        </div>
    );
}

export default Footer;
