import React from "react"
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { Flag, FooterMain, SocialIcons, SocialIcon, FooterText, DropdownItem, DropdownBTN } from "./FooterSection"
import english from '../../images/english.png'
import french from '../../images/french.png'

const Footer = (props) => {
    const handleClick = (language) => {
        if (language !== localStorage.getItem('Language')) {
            localStorage.setItem('Language', language)
            props.changeLanguage()
        }
    }

    return (
        <FooterMain>
            <DropdownBTN title={props.data.langue}>
                <DropdownItem onClick={() => handleClick("en")}><Flag src={english} alt='english_flag'/>{props.data.english}</DropdownItem>
                <DropdownItem onClick={() => handleClick("fr")}><Flag src={french} alt='french_flag'/>{props.data.french}</DropdownItem>
            </DropdownBTN>
            <SocialIcons>
                <SocialIcon hovercolor="#5A32A3" icon={faGithub} className="social_icon" onClick={() => window.open("https://github.com/Funnyadd")} />
                <SocialIcon hovercolor="#DD2A7B" icon={faInstagram} className="social_icon" onClick={() => window.open("https://www.instagram.com/adam_boy19")} />
                <SocialIcon hovercolor="#0077B5" icon={faLinkedin} className="social_icon" onClick={() => window.open("https://www.linkedin.com/in/adam-mihajlovic-865b7b198")} />
            </SocialIcons>
            <FooterText>@Copyrights 2021 - {new Date().getFullYear()} Adam Mihajlovic. {props.data.copyrights}</FooterText>
        </FooterMain>
    )
}

export default Footer
