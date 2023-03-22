import { useNavigate } from 'react-router-dom'
import { Form, Container, Button, Row, Col } from 'react-bootstrap'


function Login() {
    const navigate = useNavigate()
    return (
        <Container fluid="sm" className='tarjeta'>
            <Row className='m-5'>
                <Col xs={12} md={{ span: 6, offset: 3 }} className="bg-dark text-light p-5 rounded">
                    <h1 className='text-center  mb-5'>Login</h1>
                    <hr className='mb-5'/>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><h2>Correo Electronico</h2></Form.Label>
                            <Form.Control type="email" placeholder="Escribe tu Correo aqui" />
                            <Form.Text className="text-muted mt-2">
                               No compartiremos tu información con nadie.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><h2>Contraseña</h2></Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <div onClick={() => {
                            navigate(`../registrarse`)
                        }}><u className=''> Click aquí para Registrarse </u></div>
                        <Button className='mt-3' size="lg"
                            variant="primary" type="submit"
                            onClick={() => {
                                navigate(`../user`)
                            }}
                        >
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
