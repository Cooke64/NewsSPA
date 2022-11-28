import { routes, privateRoutes,  } from "./pages/routes";
import { AuthContext } from "./utils/context";
import { useState, useEffect } from "react";
import AppRouter from "./pages/AppRouter";
import api from "api";

function App() {
  const [isAuth, setisAuth] = useState({
    isUser: false,
    username: ''
  })
  
  const linkArray = () => isAuth.isUser ? privateRoutes : routes
  const getUser = (resData) =>{
    if (resData.)
  }
  useEffect(() => {
    if (localStorage.getItem('token')){
          setisAuth({isUser: true })
  }}, [])

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
