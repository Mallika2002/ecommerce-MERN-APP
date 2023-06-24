import { Form } from "react-bootstrap";

const SortOptionsComponent = () => {
  return (
    <Form.Select aria-label="Default select example">
      <option>SORT BY</option>
      <option value="price-1">Price: Low To High</option>
      <option value="price_-1">Price: High To Low</option>
      <option value="rating_-1">Customer Rating</option>
      <option value="name_1">Name A-Z</option>
    </Form.Select>
  );
};

export default SortOptionsComponent;
