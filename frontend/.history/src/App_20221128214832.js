import AuthContext from "./utils/context";
import { useState, useEffect } from "react";
import ApprRoutes from "./pages/AppRouter";
import api from "api";

function App() {
  const [isAuth, setisAuth] = useState({
    isUser: false,
    username: '',
    is_staff: false
    role: 'user'
  })

    
  const setUserData = (resData) =>{
    console.log(resData)
    if (resData?.username) {
        setisAuth(
          {isUser: true,
           username: resData.username,
           is_staff: resData.is_staff,
           role: resData.role
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
    <AuthContext.Provider value={{isAuth, setisAuth}}>
        <ApprRoutes/>
    </AuthContext.Provider>

    
  )
}
export default App;
