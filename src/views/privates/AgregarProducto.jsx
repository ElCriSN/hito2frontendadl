
import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'

function AgregarProducto() {
  const [product, setProduct] = useState({
    nombre: "",
    precio: "",
    imagen: ""
  })
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit= (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/adminaddproduct", product)
      .then((response) => {
        console.log(response);
        navigate('/');

      })
      .catch((error) => {
        console.log(error);
      });
  }

  const navigate = useNavigate()
  return (    
    <Container className="pt-5" fluid="sm">
    <h1>Add Product 😀!!</h1>
  <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="nombre">
      <Form.Label><h2>Product's Name</h2></Form.Label>
      <Form.Control type="text" 
      name="nombre"
      value={product.nombre} onChange={handleInputChange}
      placeholder="Add name :D!" />
      
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label><h2>Price</h2></Form.Label>
      <Form.Control type="text" name="precio" value={product.precio} onChange={handleInputChange} placeholder="Add Price :D!" />
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label><h2>Image</h2></Form.Label>
      <Form.Control type="text" name="imagen" value={product.imagen} onChange={handleInputChange}  placeholder="Add Image :D!" />
    </Form.Group>
    <Button
    variant="primary" type="submit"

      >
      Add 😃!!!
    </Button> 
  </Form>
  </Container>
  )
}

export default AgregarProducto