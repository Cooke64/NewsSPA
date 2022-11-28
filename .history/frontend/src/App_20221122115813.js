import { routes, privateRoutes,  } from "./pages/routes";
import { AuthContext } from "./utils/context";
import { useState, useEffect } from "react";
import AppRouter from "./pages/AppRouter";


function App() {
  const [isAuth, setisAuth] = useState(false)
  const linkArray = () => isAuth ? privateRoutes : routes
  console.log()

  useEffect(()=>{
    if (localStorage.getItem('auth')){
    setisAuth(true)
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
