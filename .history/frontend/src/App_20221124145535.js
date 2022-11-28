import { routes, privateRoutes,  } from "./pages/routes";
import AuthContext from "./utils/context";
import { useState, useEffect } from "react";
import AppRouter from "./pages/AppRouter";
import api from "api";

function App() {
  const [isAuth, setisAuth] = useState({
    isUser: false,
    username: ''
  })
  
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
      console.log(user)
      user.then(result =>{
        setUserData(result)
      })
      .catch(err => console.log(err))
  }}, [isAuth.isUser])

  return (
    <AuthContext.Provider value={{
          isAuth,
          setisAuth
    }}>
        <AppRouter linkArray={linkArray()}/>
    </AuthContext.Provider>

    
  )
}
export default App;
