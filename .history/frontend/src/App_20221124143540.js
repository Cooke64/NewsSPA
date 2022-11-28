import { routes, privateRoutes,  } from "./pages/routes";
import AuthContext from "./utils/context";
import React, { useState, useEffect } from "react";
import AppRouter from "./pages/AppRouter";
import api from "api";

function App() {
  const [isAuth, setisAuth] = React.useContext(AuthContext)
  const linkArray = () => isAuth.isUser ? privateRoutes : routes

    
  const setUserData = (resData) =>{
    if (resData?.username) {
        setisAuth(
          {isUser: true,
           username: resData.username 
           }
        )
    }
  }
  useEffect(() => {
    if (localStorage.getItem('token')){
      const user = api.getUser()
      user.then(result =>{
        setUserData(result)
      })
      .catch(err => console.log(err))
  }}, [isAuth.isUser])

  return (
        <AppRouter linkArray={linkArray()}/>

  )
}
export default App;
