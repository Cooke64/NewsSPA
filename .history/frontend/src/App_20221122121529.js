import { routes, privateRoutes,  } from "./pages/routes";
import { AuthContext } from "./utils/context";
import { useState, useEffect } from "react";
import AppRouter from "./pages/AppRouter";


function App() {
  const [isAuth, setisAuth] = useState({
    isUser: false,
    token: ''
  })
  const linkArray = () => isAuth.isUser ? privateRoutes : routes
  console.log()
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
