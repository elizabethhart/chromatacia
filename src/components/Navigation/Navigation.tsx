import React from "react";
import { useHistory } from 'react-router-dom';
import { Heading } from "evergreen-ui";
import { Nav, Navbar } from 'react-bootstrap';
import ColorWheel from "../ColorWheel/ColorWheel";
import './Navigation.scss';

type NavigationProps = { };

const Navigation: React.FC<NavigationProps> = ({

}: NavigationProps) => {
    const history = useHistory();

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand onClick={() => history.push('/')}>
                <Heading size={600}>
                    <ColorWheel /> Chromatacia
                </Heading>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav.Link
                    onClick={() => history.push('/gallery')}
                >
                    Gallery
                </Nav.Link>
                <Nav.Link 
                    className="about-link" 
                    onClick={() => history.push('/about')}
                >About</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;