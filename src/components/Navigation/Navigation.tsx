import React from "react";
import { Heading } from "evergreen-ui";
import { Nav, Navbar } from 'react-bootstrap';
import ColorWheel from "../ColorWheel/ColorWheel";
import './Navigation.scss';

export default class Navigation extends React.Component {
    render() {
        return <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">
                    <Heading size={600} color="#425A70">
                        <ColorWheel /> Chromatacia
                    </Heading>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/vermillion">Vermillion</Nav.Link>
                        <Nav.Link href="/emeraldcity">High Saffron</Nav.Link>
                        <Nav.Link href="/eastcarmine">East Carmine</Nav.Link>
                        <Nav.Link href="/bookclub">Book Club</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="/about">About</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    }
}
