import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Container, Button, Row, Col } from 'react-bootstrap'
function Registrarse() {
    const navigate = useNavigate()
    return (
        <Container fluid="sm" className='container-sm tarjeta'>
            <Row className='m-5'>
                <Col xs={12} md={{ span: 6, offset: 3 }} className="bg-dark text-light p-5 rounded">
                    <h1 className='text-center mb-4'>Registrarse</h1>
                    <hr></hr>
                    <Form className='text-center'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><h2>Correo Electronico</h2></Form.Label>
                            <Form.Control type="email" placeholder="Correo Electonico" />
                            <Form.Text className="text-muted">
                                Nunca compatiremos tu información.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label><h2>Teléfono</h2></Form.Label>
                            <Form.Control placeholder="Escriba su numero de Telefono" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label><h2>Dirección de Facturación</h2></Form.Label>
                            <Form.Control placeholder="Escriba la Dirección de Facturación" />
                        </Form.Group>
                        {/* Button for Register and Go to Login :D! */}
                        <Button variant="outline-primary" size="lg" className='mt-5'
                            onClick={() => {
                                navigate(`../login`)
                            }}
                           type="submit">
                            Register 
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Registrarse