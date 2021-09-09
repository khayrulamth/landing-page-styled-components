import React from 'react';
import {Nav, NavbarContainer,NavLogo, MobileIcon, NavMenu, NavLinks,NavItem,NavBtn, NavBtnLink} from './NavElements';
import {FaBars} from 'react-icons/fa';

const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    Logo
                </NavLogo>
                <MobileIcon onClick = {toggle}>
                    <FaBars onClick={toggle} />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>

                        <NavLinks to="discovers">Discovers</NavLinks>

                        <NavLinks to="services">Services</NavLinks>
                        
                        <NavLinks to="Blog">Sign up</NavLinks>
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