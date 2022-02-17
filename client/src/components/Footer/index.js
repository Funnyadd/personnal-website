import React from 'react';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FooterMain, SocialIcons, SocialIcon, FooterText } from './FooterSection';

const Footer = () => {
  return (
    <FooterMain>
        <SocialIcons>
            <SocialIcon hoverColor='#5A32A3' icon={faGithub} className="social_icon" onClick={() => window.open('https://github.com/Funnyadd')}/>
            <SocialIcon hoverColor='#DD2A7B' icon={faInstagram} className="social_icon" onClick={() => window.open('https://www.instagram.com/adam_boy19')}/>
            <SocialIcon hoverColor='#0077B5' icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com/in/adam-mihajlovic-865b7b198')} />
        </SocialIcons>
        <FooterText>@Copyrights 2021 - {new Date().getFullYear()} Adam Mihajlovic. All rights reserved.</FooterText>
    </FooterMain>
  );
};

export default Footer;
