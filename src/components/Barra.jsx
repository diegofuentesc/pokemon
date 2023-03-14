import { NavLink } from 'react-router-dom';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from '../assets/img/ubicacion.png';

const Barra = () => {
    return (
        <Navbar bg="secondary" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={img}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-end'>
                    <Nav> 
                        <NavLink
                            className={({ isActive }) => (isActive ? "vActiva" : "v")}
                            to="/" >
                            Home
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => (isActive ? "vActiva" : "v")}
                            to="/pokemones" >
                            Pokemones
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Barra