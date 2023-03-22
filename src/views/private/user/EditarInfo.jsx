import React, { useContext } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ProductsContext from '../../../ProductsContext'
const EditarInfo = () => {
  const { user } = useContext(ProductsContext)
  const navigate = useNavigate();
  return (
    <>
      <h1 className=' text-center text-dark '>Información de usuario</h1>
      <Container className="pt-5" fluid="sm">
        {user.map((u, i) => (
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label><h2>Nombre</h2></Form.Label>
              <Form.Control type="email" placeholder={u.nombre} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label><h2>Email</h2></Form.Label>
              <Form.Control type="email" placeholder={u.email} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label><h2>Teléfono</h2></Form.Label>
              <Form.Control placeholder={u.phone}/>
            </Form.Group>
            <Form.Group>
              <Form.Label><h2>Dirección de Facturación</h2></Form.Label>
              <Form.Control placeholder={u.direccion_facturacion} />
            </Form.Group>

            {/* Button for edit and Go to  :D! */}
            <Button
              onClick={() => {
                navigate(`../user`)
              }}
              variant="primary" type="submit">
              Editar información 😀!!
            </Button>
          </Form>))}
      </Container>
    </>
  )
}

export default EditarInfo