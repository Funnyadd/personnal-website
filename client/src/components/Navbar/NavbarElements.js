import { Link } from "gatsby"
import styled from "styled-components"
import { Container} from "react-bootstrap"

export const Nav = styled.nav`
    flex: 0 0 80%;
    max-width: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 1rem;

    @media screen and (max-width: 575px) {
        flex: 0 0 100%;
        max-width: 100%;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.8);
        margin-top: 20px;
    }
`

export const NavBar = styled.div`
    background-color: transparent;
    width: 100%;
    padding: 20px 0px;
    z-index: 100;
    position: absolute;
`
export const NavbarContainer = styled(Container)`
    background-color: transparent;
    display: flex;
    position: relative;
    justify-content: flex-start;

    @media screen and (min-width: 576px) {
        max-width: 560px;
    }

    @media screen and (min-width: 768px) {
        max-width: 720px;
    }

    @media screen and (min-width: 992px) {
        max-width: 960px;
    }

    @media screen and (min-width: 1200px) {
        max-width: 1140px;
    }
`

export const NavLogo = styled.a`
    color: #fff;
    background-color: transparent;
    justify-content: flex-start;
    font-weight: 700;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    flex: 0 0 20%;
    max-width: 20%;
    z-index: 1000;

    @media screen and (max-width: 576px) {
        max-width: 100%;
        justify-content: center;
        right: 50%;
        flex: 0 0 100%;
    }
`

export const MobileIcon = styled.button`
    color: #fff;
    display: none;
    border: none !important;
    box-shadow: none !important;
    z-index: 1100;

    &:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 576px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 1.8rem;
        z-index: 1100;
    }
`

export const NavMenu = styled.div`
    justify-content: flex-end;
`

export const NavItem = styled(Link)`
    overflow: visible;
    font-size: inherit;
    padding: 1px 6px;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    letter-spacing: normal;
    word-spacing: normal;
    text-rendering: auto;
    background: none;
    border: none;
    color: #fff;
    text-transform: capitalize;
    font-weight: 500;
    margin: 10px 5px;
    transition: all 0.5s ease 0s;
    text-decoration: none;

    &:hover {
        color: rgb(12, 148, 0);
    }
    
    @media screen and (max-width: 768px) {
        font-size: 13px;
    }

    @media screen and (max-width: 576px) {
        font-size: 16px;
    }
`

export const NavInner = styled.div`
    justify-content: flex-end;
    margin: 0.5rem 0;
`
