import React from 'react'
import { Form, Container, Button, Row, Col } from 'react-bootstrap'

function Administrador() {
    return (
        <Container fluid="sm" className='container-sm tarjeta'>
            <Row className='m-5 text-center'>
                <h1 className='mt-5'>Zona Administrador</h1>
                <Col xs={12} md={{ span: 6, offset: 3 }} className="bg-dark text-light p-5 rounded text-center mt-5">
                    <h1 className='mb-5'>Agregar Producto</h1>
                    <hr></hr>
                    <Form className='text-center'>
                        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                            <Form.Label><h2>Nombre de Producto</h2></Form.Label>
                            <Form.Control type="name" placeholder="Agrega el Nombre" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><h2>Precio</h2></Form.Label>
                            <Form.Control type="password" placeholder="Agrega el precio" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicUrl">
                            <Form.Label><h2>Imagen</h2></Form.Label>
                            <Form.Control type="url" placeholder="Agrega la URl de la Imagen" />
                        </Form.Group>
                        <Button
                            variant="outline-primary" type="submit" size="lg" className="mt-3">
                           Agregar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Administrador