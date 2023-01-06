import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Dropdown, DropdownButton } from "react-bootstrap"


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

export const Flag = styled.img`
    margin-right: 10px;
    cursor: pointer;
    width: 24px;

    @media (max-width: 768px) {
        width: 28px;
    }

    @media (max-width: 576px) {
        width: 32px;
    }
`

export const DropdownBTN = styled(DropdownButton)`
    margin-bottom: 10px;
    
    .dropdown-menu {
        padding: 0px;
        min-width: 0 !important;
        width: 120px !important;
        background-color: #696969;
    }

    .dropdown-toggle {
        width: 120px !important;
        background-color: #696969 !important;
        border-color: #696969 !important;
        color: black !important;
        padding-top: 3px;
        padding-bottom: 3px;

        &:hover {
            background-color: #505050 !important;
            border-color: #505050 !important;
        }

        &:active {
            background-color: #303030 !important;
            border-color: #303030 !important;
        }
    }
`

export const DropdownItem = styled(Dropdown.Item)`
    padding: 5px  !important;
    color: black !important;

    &:hover {
        background-color: #505050 !important;
        border-color: #505050 !important;
    }

    &:active {
        background-color: #303030 !important;
        border-color: #303030 !important;
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
