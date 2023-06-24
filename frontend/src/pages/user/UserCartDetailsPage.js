import {Row,Col,Container,Form,Alert, ListGroup,Button} from 'react-bootstrap';
import CartItemComponent from '../../components/CartItemComponent';

const UserCartDetailsPage = () =>{
    return(
        <Container fluid>
        <Row className='mt-4'>
            <h1>Cart Details</h1>
            <Col md={8}>
                <br/>
                <Row>
                    <Col md={6}>
                       <h3>Shipping</h3>
                       <b>Name</b>: John Doe<br/>
                       <b>Address</b>: 8379 mayFlower St. Los Angeles, CA 90063<br/>
                       <b>Phone</b>: 999 888 6666<br/>
                    </Col>
                    <Col md={6}>
                       <h3>Payment method</h3>
                       <Form.Select>
                          <option value="pp">Paypal</option>
                          <option value="cod">Cash on delivery</option>
                       </Form.Select>
                    </Col>
                    <Row>
                        <Col>
                        <Alert className="mt-3" variant="danger">Not Delivered. In order to make order, fill out your prodile with correct address,city etc.</Alert>
                        </Col>
                        <Col>
                        <Alert className="mt-3" variant="success">Not paid yet</Alert>
                        </Col>
                    </Row>
                </Row>
                <br/>
                <h2>Order items</h2>
                <ListGroup variant="flush">
                    {Array.from({length:3}).map((item,idx)=>(
                        <CartItemComponent key={idx}/>
                    ))}
                </ListGroup>
            </Col>
            <Col md={4}>
                <ListGroup>
                   <ListGroup.Item>
                       <h3>Order Summary</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                       Itemms price (after tax): <span className='fw-bold'>$892</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                       Shipping: <span className='fw-bold'>included</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                     Tax: <span className='fw-bold'>included</span>
                    </ListGroup.Item>
                    <ListGroup.Item className='text-danger'>
                     Total Price: <span className='fw-bold'>$904</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className='d-grid gap-2'>
                           <Button size="lg" variant="danger" type="button">
                                 Pay for the order
                           </Button>
                        </div>
                    </ListGroup.Item>
                </ListGroup>

            </Col>
        </Row>
        </Container>
    )
}

export default UserCartDetailsPage;