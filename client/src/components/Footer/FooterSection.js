import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const FooterMain = styled.div`
    background-color: #111;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
`

export const SocialIcons = styled.div``

export const SocialIcon = styled(FontAwesomeIcon)`
    font-size: 20px;
    color: rgb(85, 85, 85);
    margin: 0px 10px;
    cursor: pointer;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    transition: all 0.5s ease 0s;

    &:hover {
        color: ${props => props.hovercolor} !important;
    }

    @media (max-width: 768px) {
        font-size: 24px;
    }

    @media (max-width: 576px) {
        font-size: 28px;
    }
`

export const LanguageButton = styled.img`
    vertical-align: baseline;
    margin: 0px 10px;
    cursor: pointer;
    width: 24px;

    @media (max-width: 768px) {
        width: 28px;
    }

    @media (max-width: 576px) {
        width: 32px;
    }

    -webkit-filter: brightness(100%);
    -webkit-transition: all 0.5s ease 0s;
    -moz-transition: all 0.5s ease 0s;
    -o-transition: all 0.5s ease 0s;
    -ms-transition: all 0.5s ease 0s;
    transition: all 0.5s ease 0s;

    &:hover {
        -webkit-filter: brightness(70%);
    }
`

export const FooterText = styled.p`
    margin-top: 3px;
    text-align: center;
    margin-bottom: 0;
    color: rgb(85, 85, 85);

    @media (max-width: 576px) {
        padding: 0 10px;
    }
`
