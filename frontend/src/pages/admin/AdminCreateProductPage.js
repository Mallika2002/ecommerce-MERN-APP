import {Row,Col,Button} from 'react-bootstrap';
import {Container,Form,CloseButton,Table,Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useState} from 'react';
const AdminCreateProductPage = () => {
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
                    <Link to="/admin/products" className='btn btn-info'>Go Back</Link>
                </Col>
                <Col md={6}>
                    <h1>Create a new product</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                       <Form.Group className="mb-3" controlId="formBasicName">
                           <Form.Label>Name</Form.Label>
                           <Form.Control name="name" required type="text"/>
                       </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name="description" required as="textarea" rows={3}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCount">
                        <Form.Label>Count in Stock</Form.Label>
                        <Form.Control name="count" required type="number"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control name="price" required type="text"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCategory">
                        <Form.Label>Category<CloseButton/>(<small>remove selected</small>)</Form.Label>
                        <Form.Select required name="category" aria-label="Default select example">
                            <option value="">Choose Category</option>
                            <option value="1">Laptops</option>
                            <option value="2">TV</option>
                            <option value="3">Games</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId="formBasicNewCategory">
                        <Form.Label>
                            Or create a new category (e.g. Computers/Laptops/Intel){" "}
                        </Form.Label>
                        <Form.Control name="newCategory" type="text"/>
                    </Form.Group>
                    <Row className='mt-5'>
                        <Col md={6}>
                            <Form.Group className='mb-3' controlId='formBasicAttributes'>
                                <Form.Label>Choose attribute and set value</Form.Label>
                                <Form.Select 
                                    name="atrrKey"
                                    aria-label="Default select example">
                                    <option>Choose attribute</option>
                                    <option value="red">color</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className='mb-3' controlId='formBasicAttributes'>
                                <Form.Label>Attribute value</Form.Label>
                                <Form.Select 
                                    name="atrrVal"
                                    aria-label="Default select example">
                                    <option>Choose attribute value</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Attribute</th>
                                    <th>Value</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>attr key</td>
                                    <td>attr value</td>
                                    <td>
                                        <CloseButton/>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className='mb-3' controlId='formBasicAttribute'>
                                <Form.Label>Create new attributes</Form.Label>
                                <Form.Control
                                    disabled={false}
                                    placeholder="first choose or create category"
                                    name="newAttrValue"
                                    type="text"/>
                                </Form.Group>
                        </Col>
                        <Col md={6}>
                        <Form.Group className='mb-3' controlId='formBasicAttribute'>
                                <Form.Label>Attribute Value</Form.Label>
                                <Form.Control
                                    disabled={false}
                                    placeholder="first choose or create category"
                                    required={true}
                                    name="newAttrValue"
                                    type="text"/>
                                </Form.Group>
                        </Col>
                    </Row>
                    <Alert variant="primary">
                        After typing attribute key and value press enter on one of the field.
                    </Alert>
                    <Form.Group controlId="formFileMultiple" className='mb-3 mt-3'>
                        <Form.Label>Images</Form.Label>
                        <Form.Control required type="file" mulitple/>                    
                    </Form.Group>
                    <Button variant="primary" type="submit">Create</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminCreateProductPage