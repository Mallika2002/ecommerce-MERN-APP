import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';
const HeaderComponent = () => {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="bg-body-tertiary">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand href="/">BEST ONLINE SHOP</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <InputGroup>
                    <DropdownButton id="dropdown-basic-button" title="All">
                    <Dropdown.Item>Electronics</Dropdown.Item>
                    <Dropdown.Item>Cars</Dropdown.Item>
                    <Dropdown.Item>Books</Dropdown.Item>
                    </DropdownButton>
                    <Form.Control type="text" placeholder="Search in shop ..." />
                    <Button variant="warning">
                    <i className="bi bi-search text-dark"></i>
                    </Button>
                </InputGroup>
                </Nav>
                <Nav>
                    <LinkContainer to="/admin/orders">
                    <Nav.Link>Admin
                        <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
                    </Nav.Link>
                    </LinkContainer>
                    <NavDropdown title="John Doe" id="collasible-nav-dropdown">
                    <NavDropdown.Item eventKey="/user/my-orders" as={Link} to="/user/my-orders">My orders</NavDropdown.Item>
                    <NavDropdown.Item eventKey="/user" as={Link} to="/user">My profile</NavDropdown.Item>
                    <NavDropdown.Item>Logout</NavDropdown.Item>
                    </NavDropdown>
                    <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/register">
                    <Nav.Link>Register</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/cart">
                    <Nav.Link>
                    <Badge pill bg="danger">
                            2
                        </Badge>
                        <i className="bi bi-cart-dash"></i>
                        <span className='ms-1'>CART</span>
                    </Nav.Link>
                    </LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
  );
}

export default HeaderComponent