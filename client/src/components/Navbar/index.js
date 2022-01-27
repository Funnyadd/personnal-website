import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes} from "react-icons/fa"
import { NavBar, Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavInner } from './NavbarElements'

const Navbar = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);
    
    const handleClick= () => {
        setIsMenuVisible(!isMenuVisible);
    }

    return(
        <>
            <NavBar className={scroll ? 'navbar navbar-expand-sm sticky' : 'navbar navbar-expand-sm'}>
                <NavbarContainer className='container'>
                    <NavLogo>
                        ADAM
                    </NavLogo>
                    <MobileIcon onClick={handleClick} id="mobileBTN" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">{isMenuVisible  ? <FaTimes /> : <FaBars />}</span>
                    </MobileIcon>
                    <Nav className='navbar navbar-expand-sm'>
                        <NavInner className="navbar-collapse collapse" id="myNavbar" >
                            <NavMenu className='navbar-nav'>
                                <NavItem>home</NavItem>
                                <NavItem>about</NavItem>
                                <NavItem>contact</NavItem>
                            </NavMenu>
                        </NavInner>
                    </Nav>
                </NavbarContainer>
            </NavBar>
        </>
    )
}

export default Navbar