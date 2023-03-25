import React, { useState } from "react";
import axios from 'axios';
// React Hooks =D! 
import {useNavigate} from 'react-router-dom'
// React Bootstrap Items :DD!
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
function Registrarse() {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    telefono: "",
    direccion: ""
  })
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUsuario(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit= (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/usuarios", usuario)
      .then((response) => {
        console.log(response);
        navigate('/login');

      })
      .catch((error) => {
        console.log(error);
      });
  }
  // const for navigate =D!
  const navigate = useNavigate()
  return (
    //Form for Register :D!!
    <Container className="pt-5" fluid="sm">
    <h1>Registrarse 😃!</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" name="nombre" value={usuario.nombre} onChange={handleInputChange} placeholder="Ingrese su nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={usuario.email} onChange={handleInputChange} placeholder="Ingrese su email" />
        <Form.Text className="text-muted">
          Nunca compartiremos su correo electrónico con nadie más.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" name="password" value={usuario.password} onChange={handleInputChange} placeholder="Ingrese su contraseña" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="telefono">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="text" name="telefono" value={usuario.telefono} onChange={handleInputChange} placeholder="Ingrese su teléfono" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="direccion">
        <Form.Label>Dirección de facturación</Form.Label>
        <Form.Control type="text" name="direccion" value={usuario.direccion} onChange={handleInputChange} placeholder="Ingrese su dirección de facturación" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Registrarse 😀
      </Button>
    </Form>
  </Container>
  );
}

export default Registrarse
