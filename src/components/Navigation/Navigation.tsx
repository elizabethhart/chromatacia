import React from "react";
import { Heading } from "evergreen-ui";
import { Nav, Navbar } from 'react-bootstrap';
import ColorWheel from "../ColorWheel/ColorWheel";
import './Navigation.scss';

export default class Navigation extends React.Component {
    render() {
        return <>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="/">
                    <Heading size={600}>
                        <ColorWheel /> Chromatacia
                    </Heading>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="/about">About</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    }
}
