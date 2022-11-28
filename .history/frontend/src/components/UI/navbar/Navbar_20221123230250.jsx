import React, {useContext}  from 'react'
import { AuthContext } from '../../../utils/context'
import { NavLink } from 'react-router-dom'




export default function Contact() {
  const {isAuth, setisAuth} = useContext(AuthContext)

  const logout = () => {
    localStorage.removeItem('token',)
    setisAuth({isUser: false, username: ''})
  }
  
  return (
      <nav className="navbar navbar-expand navbar-dark bg-info">
          <NavLink to="/" className="navbar-brand">
            MyBlopg Page
              </NavLink>
            <div className="navbar-nav mr-auto">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                  <NavLink to="/" className="nav-link">Posts</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">Contacts</NavLink>
              </li>
              
                {isAuth.isUser
                ?
                <li className="nav-item">
                    <NavLink onClick={logout} className="nav-link">{isAuth.username}, выйти?</NavLink>
                </li>
                :
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">Login</NavLink>
                  <NavLink to="/signup" className="nav-link">Signup</NavLink>
                </li>
                }

                
          </ul>
        </div>
      </nav>

  )
}
