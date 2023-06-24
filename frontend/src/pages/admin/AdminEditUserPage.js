import {Button,Row,Col} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {Form} from 'react-bootstrap';



const AdminEditUserPage = () => {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    }
    return(
        <Container>
            <Row className='mt-5 justify-content-md-center'>
                <Col md={1}>
                    <Link to="/admin/users" className='btn btn-info'>Go Back</Link>
                </Col>
                <Col md={6}>
                    <h1>Edit user</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                       <Form.Group className="mb-3" controlId="formBasicFirstName">
                           <Form.Label>First name</Form.Label>
                           <Form.Control name="name" required type="text" defaultValue="John"/>
                       </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control name="lastName" required type="text" defaultValue="Doe"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" required type="email" defaultValue="John@email.com"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check name="isAdmin" type="checkbox" label="Is Admin"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">UPDATE</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminEditUserPage