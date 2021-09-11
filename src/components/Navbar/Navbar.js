import React, { useEffect, useState } from 'react';
import {Nav, NavbarContainer,NavLogo, MobileIcon, NavMenu, NavLinks,NavItem,NavBtn, NavBtnLink} from './NavElements';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = ()=>{
        if(window.scrollY>=80){
            setScrollNav(true);
        }
        else{
            setScrollNav(false);
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
    },[])

    const toggleHome = () =>{
        scroll.scrollToTop();
    };

    return (
        <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo onClick={toggleHome} to="/">
                    logo
                </NavLogo>
                <MobileIcon onClick = {toggle}>
                    <FaBars onClick={toggle} />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80} >About</NavLinks>

                        <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discovers</NavLinks>

                        <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
                        
                        <NavLinks to="signup" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign up</NavLinks>
                    </NavItem>
                </NavMenu>

                <NavBtn>
                    <NavBtnLink to="signin">Sign In</NavBtnLink>
                </NavBtn>

            </NavbarContainer>


        </Nav>
        </>
    );
};

export default Navbar;