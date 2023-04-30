import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">KoreaMarket</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">

                        </Nav>
                        <Nav>
                            <NavDropdown title="중고거래" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">가전</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    모바일
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">가구</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    무료나눔
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#deets">부동산</Nav.Link>
                            <Nav.Link href="#deets">구인구직</Nav.Link>
                            <Nav.Link href="/login">로그인</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;