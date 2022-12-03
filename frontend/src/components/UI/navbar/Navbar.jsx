import React, {useContext}  from 'react'
import AuthContext from '../../../utils/context'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Navbar, Container, Nav } from 'react-bootstrap';


export default function Contact({cart}) {
  const {isAuth, setisAuth} = useContext(AuthContext)

  
  const logout = () => {
    localStorage.removeItem('token',)
    setisAuth({isUser: false, username: ''})
  }
  
  return (
    <Navbar bg="light" variant="light" expand="lg">
    <Container>
      <NavLink to="/" className="navbar-brand">
            MyBlopg Page
      </NavLink>
      <Nav className="me-auto">
        <NavLink to="/" className="nav-link">Посты</NavLink>
        <NavLink to="/market" className="nav-link">Товары</NavLink>
        <NavLink to="/groups" className="nav-link">Группы</NavLink>
        <NavLink to="/contact" className="nav-link">Контакты</NavLink>
      </Nav>
      <Nav className="ml-2">
        {isAuth.isUser
                  ?
                  <>
                  <li className="nav-item">
                      <NavLink onClick={logout} className="nav-link">{isAuth.username}, выйти?</NavLink>
                  </li>
                  <li className="nav-item"> 
                    <NavLink to='/cart' className="nav-link" style={cart ? {color: 'red'} : {color: 'blue'}} ><ShoppingCartIcon/></NavLink>
                  </li>
                  </>
                  :
                    <>
                    <li className="nav-item">
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                    </li>
                        <li><NavLink to="/signup" className="nav-link">Signup</NavLink></li>
                    </>
                  }
        </Nav>
      </Container>
    </Navbar>



           

  )
}
