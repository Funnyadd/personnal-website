import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FooterMain = styled.div`
    background-color: #111;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
`

export const SocialIcons = styled.div`
`

export const SocialIcon = styled(FontAwesomeIcon)`
    font-size: 20px;
    color: rgb(85, 85, 85);
    margin: 0px 10px;
    cursor: pointer;
    transition: all 0.5s ease 0s;

    &:hover {
        color: ${ props => props.hoverColor } !important;
    }

    @media (max-width: 768px) {
        font-size: 24px;
    }

    @media (max-width: 576px) {
        font-size: 28px;
    }
`

export const FooterText = styled.p`
    margin-top: 3px;
    text-align: center;
    margin-bottom: 0;

    @media (max-width: 576px) {
        padding: 0 10px;

    }
`