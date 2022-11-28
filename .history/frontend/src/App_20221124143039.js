import { routes, privateRoutes,  } from "./pages/routes";
import { useContext, useEffect } from "react";
import AppRouter from "./pages/AppRouter";
import api from "api";
import AuthContext, { AuthProvider } from "./utils/context";


function App() {
  const {isAuth, setisAuth} = useContext(AuthContext)
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
    <AuthProvider >
        <AppRouter linkArray={linkArray()}/>
    </AuthProvider>

    
  )
}
export default App;
