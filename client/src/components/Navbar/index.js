import React, { useEffect, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { MobileIcon, Nav, NavBar, NavInner, NavItem, NavLogo, NavMenu, NavbarContainer } from "./NavbarElements"

const Navbar = (props) => {

    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50)
        })
    }, [])

    const handleClick = () => {
        setIsMenuVisible(!isMenuVisible)
    }

    return (
        <>
            <NavBar className={scroll ? "navbar navbar-expand-sm sticky smoothTransition" : "navbar navbar-expand-sm smoothTransition"}>
                <NavbarContainer>
                    <NavLogo href={"/#" + props.navLabels[0]}>
                        <img 
                            className={scroll ? "navSticky smoothTransition" : "smoothTransition"} 
                            src={props.favicon} 
                            id="navLogo" 
                            alt="navbar-logo"
                        />
                    </NavLogo>
                    <MobileIcon
                        onClick={handleClick}
                        id="mobileBTN"
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#myNavbar"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon">{isMenuVisible ? <FaTimes /> : <FaBars />}</span>
                    </MobileIcon>
                    <Nav className="navbar navbar-expand-sm">
                        <NavInner className="navbar-collapse collapse" id="myNavbar">
                            <NavMenu className="navbar-nav">
                                {props.navLabels.map((value, index) => {
                                    let link = `/#${value}`
                                    value = value.replace(" ", "\u00A0")

                                    return (
                                        <NavItem key={index} to={link}>
                                            {value}
                                        </NavItem>
                                    )
                                })}
                            </NavMenu>
                        </NavInner>
                    </Nav>
                </NavbarContainer>
            </NavBar>
        </>
    )
}

export default Navbar
