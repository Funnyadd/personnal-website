import React, { useState } from "react"
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { LanguageButton, FooterMain, SocialIcons, SocialIcon, FooterText } from "./FooterSection"
import english from '../../images/english.png'
import french from '../../images/french.png'

const Footer = (props) => {
    const [flag, setFlag] = useState(localStorage.getItem('Language') === 'en' ? english : french);
    const [rights, setRights] = useState(localStorage.getItem('Language') === 'en' ? "All rights reserved." : "Tous droits réservés")

    const handleClick = () => {
        props.changeLanguage()
        setFlag(flag === english ? french : english)
        setRights(flag === english ? "All rights reserved." : "Tous droits réservés")
    }

    return (
        <FooterMain>
            <SocialIcons>
                <SocialIcon hovercolor="#5A32A3" icon={faGithub} className="social_icon" onClick={() => window.open("https://github.com/Funnyadd")} />
                <SocialIcon hovercolor="#DD2A7B" icon={faInstagram} className="social_icon" onClick={() => window.open("https://www.instagram.com/adam_boy19")} />
                <SocialIcon hovercolor="#0077B5" icon={faLinkedin} className="social_icon" onClick={() => window.open("https://www.linkedin.com/in/adam-mihajlovic-865b7b198")} />
                <LanguageButton onClick={handleClick} className="flag">{<img src={flag} alt='english_flag'/>}</LanguageButton>
            </SocialIcons>
            <FooterText>@Copyrights 2021 - {new Date().getFullYear()} Adam Mihajlovic. {rights}</FooterText>
        </FooterMain>
    )
}

export default Footer
