import { Container, Navbar, Nav, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import { HouseDoorFill, BookFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import logo from "../Assets/logo/logo.png";
import { GET_SEARCH, getDataAction } from "../Redux/actions";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getDataAction(query, GET_SEARCH));
    };

    return (
        <Navbar expand="md" fixed="left" id="sidebar" className="justify-content-between">
            <Container className="flex-column align-items-start">
                <Navbar.Brand href="index.html">
                    <img src={logo} alt="Spotify Logo" width="131" height="40" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
                <Navbar.Collapse id="navbarNavAltMarkup">
                    <Nav>
                        <ul>
                            <li>
                                <Nav.Link href="#" className="nav-item nav-link d-flex align-items-center">
                                    <HouseDoorFill />
                                    &nbsp; Home
                                </Nav.Link>
                            </li>
                            <li>
                                <NavLink to={"/library"} className="nav-item nav-link d-flex align-items-center">
                                    <BookFill />
                                    &nbsp; Your Library
                                </NavLink>
                            </li>
                            <li>
                                <Form onSubmit={handleSubmit} className="input-group mt-3">
                                    <FormControl
                                        type="text"
                                        placeholder="Search"
                                        id="searchField"
                                        aria-label="Search"
                                        aria-describedby="basic-addon2"
                                        onChange={(e) => setQuery(e.target.value)}
                                    />

                                    <Button className="btn" variant="outline-secondary" type="submit">
                                        GO
                                    </Button>
                                </Form>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <div className="nav-btn">
                <Button className="btn signup-btn" type="button">
                    Sign Up
                </Button>
                <Button className="btn login-btn" type="button">
                    Login
                </Button>
                <div className="">
                    <a href="#">Cookie Policy</a>{" "}
                    <a href="#" className="ms-2">
                        {" "}
                        Privacy
                    </a>
                </div>
            </div>
        </Navbar>
    );
};
export default SideBar;
