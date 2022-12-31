import React, { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { NavBar, Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavInner } from "./NavbarElements"
import { useQuery, gql } from "@apollo/client"

const Navbar = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50)
        })
    }, [])

    const { loading, error, data } = useQuery(gql`
        {
            navs {
                data {
                    attributes {
                        navLinks
                    }
                }
            }
            global {
                data {
                    attributes {
                        favicon {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    if (loading) return <div>Loading content...</div>
    if (error) {
        return (
            <>
                <div>Something broke...</div>
                {error.clientErrors.map((err, index) => (
                    <p key={index}>{err.message}</p>
                ))}
            </>
        )
    }

    const navLabels = []

    data.navs.data.forEach(element => {
        navLabels.push(element.attributes.navLinks)
    })

    const handleClick = () => {
        setIsMenuVisible(!isMenuVisible)
    }

    return (
        <>
            <NavBar className={scroll ? "navbar navbar-expand-sm sticky smoothTransition" : "navbar navbar-expand-sm smoothTransition"}>
                <NavbarContainer className="container">
                    <NavLogo href={"/#" + navLabels[0]}>
                        <img className={scroll ? "navSticky smoothTransition" : "smoothTransition"} src={data.global.data.attributes.favicon.data.attributes.url} id="navLogo" alt="navbar-logo" />
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
                                {navLabels.map((value, index) => {
                                    let link = `/#${value}`
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
