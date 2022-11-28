import { routes, privateRoutes,  } from "./pages/RoutMaker";
import AuthContext from "./utils/context";
import { useState, useEffect } from "react";
import AppRouter from "./pages/AppRouter";
import api from "api";

function App() {
  const [isAuth, setisAuth] = useState({
    isUser: false,
    username: ''
  })

    
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
        console.log(user)
      })
      .catch(err => console.log(err))
  }}, [isAuth.isUser])

  return (
    <AuthContext.Provider value={{
          isAuth,
          setisAuth
    }}>
        <ApprRoutes/>
    </AuthContext.Provider>

    
  )
}
export default App;
