import React from 'react'
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbars = () => {
    return (
        // <nav className="nav">
        //     <Link to="/" className="site-title">Culin'Air</Link>
        //     <ul>
        //         <li className="active">
        //             <Link to="/noservices">Nos Services</Link>
        //         </li>
        //         <li>
        //             <Link to="/apropos">A propos</Link>
        //         </li>
        //         <li>
        //             <Link to="/contact">Contact</Link>
        //         </li>

        //     </ul>
        // </nav>
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/">Culin'Air</Navbar.Brand>
                    <Nav className="me-auto">


                        <Nav.Link href="/noservices">Nos Services</Nav.Link>
                        <Nav.Link href="/apropos">A propos</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navbars
