import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const Sidebar = () => {
  return (
    <Container className='text-light bg-dark sidebar pt-5'>
      <ul>
        <li>
          <NavLink to="/user/editar_info" className="decoration-none text-light">
            Cuenta
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/pedidos" className="decoration-none text-light">
            Pedidos
          </NavLink>
        </li>
      </ul>
    </Container>
  )
}
export default Sidebar;
