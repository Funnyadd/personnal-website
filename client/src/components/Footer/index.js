import React from 'react';
import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FooterMain, SocialIcons } from './FooterSection';

const Footer = () => {
  return (
    <FooterMain>
        <SocialIcons>
            <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://www.github.com')}/>
            <FontAwesomeIcon icon={faTwitter} className="social_icon" onClick={() => window.open('https://www.twitter.com')} />
            <FontAwesomeIcon icon={faYoutube} className="social_icon" onClick={() => window.open('https://www.youtube.com')} />
            <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com')} />
        </SocialIcons>
    </FooterMain>
  );
};

export default Footer;
