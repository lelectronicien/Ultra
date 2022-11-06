import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
}
    from "./Navbar.element";

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/'>
                            <NavIcon />
                            Ultra
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/'>Home</NavLinks>
                            </NavItem>


                            <NavItem>
                                <NavLinks to='/services'>Services</NavLinks>
                            </NavItem>


                            <NavItem>
                                <NavLinks to='/products'>Products</NavLinks>
                            </NavItem>
                        </NavMenu>

                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;