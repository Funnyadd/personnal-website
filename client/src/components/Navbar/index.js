import React, { useEffect, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { MobileIcon, Nav, NavBar, NavInner, NavItem, NavLogo, NavMenu, NavbarContainer } from "./NavbarElements"

const Navbar = (props) => {

    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const [scroll, setScroll] = useState(false)
    const [isMobileFormat, setIsMobileFormat] = useState(false)

    const handleLinkClick = (link) => {
        window.location.href = link
        getNavButtonState();
    }

    const getNavButtonState = async () => {
        setIsMenuVisible(!isMenuVisible)
        await new Promise(res => setTimeout(res, 400)) // value in milliseconds (ms)
        .then(() => setIsMenuVisible(document.getElementById("myNavbar").classList.value.includes("show")))
    }

    const fixMobileFormat = () => {
        if (window.innerWidth > 576) setIsMobileFormat(false)
        else setIsMobileFormat(true)
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50)
        })
        
        fixMobileFormat()
        window.addEventListener("resize", () => {
            fixMobileFormat()
        })
    }, [])

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
                        onClick={getNavButtonState}
                        id="mobileBTN"
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#myNavbar"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span>{isMenuVisible ? <FaTimes /> : <FaBars />}</span>
                    </MobileIcon>
                    <Nav className="navbar navbar-expand-sm">
                        <NavInner className="navbar-collapse collapse" id="myNavbar">
                            <NavMenu className="navbar-nav">
                                {
                                    props.navLabels.map((value, index) => {
                                        let link = `/#${value}`
                                        value = value.replace(" ", "\u00A0")
                                        
                                        return (
                                            isMobileFormat ?
                                            <NavItem
                                                key={index}
                                                to={link}
                                                onClick={() => handleLinkClick(link)}
                                                data-bs-toggle="collapse"
                                                data-bs-target="#myNavbar"
                                                aria-controls="navbarSupportedContent"
                                                aria-expanded="false"
                                                aria-label="Toggle navigation"
                                            >
                                                {value}
                                            </NavItem>
                                            :
                                            <NavItem key={index} to={link}>
                                                {value}
                                            </NavItem>
                                        )
                                    })
                                }
                            </NavMenu>
                        </NavInner>
                    </Nav>
                </NavbarContainer>
            </NavBar>
        </>
    )
}

export default Navbar
