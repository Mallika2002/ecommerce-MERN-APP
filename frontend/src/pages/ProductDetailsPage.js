import { useParams } from "react-router-dom";
import {Row,Col, ListGroup,Alert} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Rating} from "react-simple-star-rating";
import {Form,Button} from "react-bootstrap";
import AddedToCartMessageComponent from "../components/AddedToCartMessageComponent";
import {Image} from "react-bootstrap";
import ImageZoom from 'js-image-zoom'
import {useEffect} from "react";
const ProductDetailsPage = () =>{
    var options = {
        //width:400,
        //zoomWidth:500,
        //fillContainer:true,
        //zoomPosition:'bottom',
        scale : 2,
        offset : {vertical: 0, horizontal: 0},
    }
    useEffect(() => {
        new ImageZoom(document.getElementById("first"),options)
        new ImageZoom(document.getElementById("second"),options)
        new ImageZoom(document.getElementById("third"),options)
        new ImageZoom(document.getElementById("fourth"),options)
    })
    return(
        <Container>
            <AddedToCartMessageComponent/>
        <Row className="mt-5">
            <Col style={{zIndex:1}} md={4}>
                 <div id="first">
                   <Image crossOrigin="anonymous" fluid src="/images/games-category.png"/>
                 </div>
                 <br/>
                 <div id="second">
                   <Image crossOrigin="anonymous" fluid src="/images/monitors-category.png"/>
                 </div>
                 <br/>
                 <div id="third">
                   <Image crossOrigin="anonymous" fluid src="/images/tablets-category.png"/>
                 </div>
                 <br/>
                 <div id="fourth">
                   <Image crossOrigin="anonymous" fluid src="/images/games-category.png"/>
                 </div>
                 <br/>
            </Col>
            <Col md={8}>
                <Row>
                    <Col md={8}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h1>Product Name</h1>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating readonly size={20} initialValue={4}/>(1)
                            </ListGroup.Item>
                            <ListGroup.Item>Price<span className="fw-bold">$345</span></ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac Lorem ipsum dolor head dvnkjv kj haead oni oionlinf </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                       <ListGroup>
                        <ListGroup.Item>Status: in stock</ListGroup.Item>
                        <ListGroup.Item>Price:<span className="fw-bold">$345</span></ListGroup.Item>
                        <ListGroup.Item>Quantity:
                            <Form.Select size="lg" aria-label="Default select example">
                                <option>1</option>
                                <option value="1">2</option>
                                <option value="2">3</option>
                                <option value="3">4</option>
                            </Form.Select>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant="danger">Add to cart</Button>
                        </ListGroup.Item>
                       </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-5">
                        <h5>REVIEWS</h5>
                        <ListGroup variant="flush">
                            {Array.from({length: 10}).map((item,idx) => (
                            <ListGroup.Item key={idx}>John Doe<br/>
                            <Rating readonly size={20} initialValue={4}/><br/>
                            20-09-2001 <br/>
                            Porta ac consectueute ac Lorem ipsum dolor, sit amet consecturo apldjishichn edit</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
                <hr/>
                Send Review Form
                <Alert variant="danger">Login first to write a Review</Alert>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        
                        <Form.Label>Write a Review</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Select aria-label="Default select example">
                        <option>Your Rating</option>
                        <option value="5">(very good)</option>
                        <option value="4">(good)</option>
                        <option value="3">(average)</option>
                        <option value="2">(bad)</option>
                        <option value="1">(awful)</option>
                    </Form.Select>
                    <Button className="mb-3 mt-3" variant="primary">Submit</Button>
                </Form>
            </Col>
        </Row>
        </Container>
    )
}

export default ProductDetailsPage;