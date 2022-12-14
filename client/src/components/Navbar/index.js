import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes} from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import { NavBar, Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavInner } from './NavbarElements'

const Navbar = () => {
    const navName = useStaticQuery(graphql`
        query {
            allStrapiNav {
                edges {
                    node {
                        navLinks
                    }
                }
            }
            strapiGlobal {
                defaultSeo {
                  shareImage {
                    localFile {
                      url
                    }
                  }
                }
              }
        }
    `)

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [scroll, setScroll] = useState(false);

    const navLabels = []

    navName.allStrapiNav.edges.forEach(element => {
        navLabels.push(element.node.navLinks)
    });

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
            <NavBar className={scroll ? 'navbar navbar-expand-sm sticky smoothTransition' : 'navbar navbar-expand-sm smoothTransition'}>
                <NavbarContainer className='container'>
                    <NavLogo href={'/#' + navLabels[0]}>
                        <img className={scroll ? 'navSticky smoothTransition' : 'smoothTransition'} src={navName.strapiGlobal.defaultSeo.shareImage.localFile.url} id="navLogo" alt="navbar-logo" />
                    </NavLogo>
                    <MobileIcon onClick={handleClick} id="mobileBTN" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">{isMenuVisible  ? <FaTimes /> : <FaBars />}</span>
                    </MobileIcon>
                    <Nav className='navbar navbar-expand-sm'>
                        <NavInner className="navbar-collapse collapse" id="myNavbar" >
                            <NavMenu className='navbar-nav'>
                                {navLabels.map((value, index) => {
                                    let link = `/#${value}`
                                    return (
                                        <NavItem key={index} to={link}>{value}</NavItem>
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