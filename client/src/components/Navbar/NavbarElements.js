import styled from 'styled-components'

export const Nav = styled.nav`
    flex: 0 0 80%;
    max-width: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 1rem;

    @media screen and (max-width: 576px) {
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

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    background-color: transparent;
    position: relative;
    justify-content: flex-end;

    @media screen and (min-width: 576px) {
        max-width: 540px;
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

export const NavLogo = styled.div`
    color: #fff;
    background-color: transparent;
    justify-content: flex-start;
    font-weight: 700;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    flex: 0 0 20%;
    max-width: 20%;

    @media screen and (max-width: 576px) {
        max-width: 100%;
        justify-content: center;
        right: 50%;
        flex: 0 0 100%;
    }
`

export const MobileIcon = styled.button`
    display: none;
    border: none !important;
    box-shadow: none !important;

    &:hover {
        cursor: pointer;
    }
    
    @media screen and (max-width: 576px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 1.8rem;
    }
`

export const NavMenu = styled.div`
    justify-content: flex-end;
`

export const NavItem = styled.button`
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

    &:hover {
        color: rgb(12, 148, 0);
    }
`

export const NavInner = styled.div`
    justify-content: flex-end;
    margin: 0.5rem 0;
`