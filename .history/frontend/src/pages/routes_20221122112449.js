import Posts from "../pages/Posts";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import CurrentPost from "../pages/CurrentPost";
import EditPost from "../pages/EditPost";
import LoginPage from "./LoginPage";
import SignUp from "./Register";
import { AuthContext } from '../utils/context'
import { Navigate } from "react-router-dom";
import { useContext } from "react";

const useElem =  () => {
  const {isAuth, setisAuth} = useContext(AuthContext)
  if (isAuth)
  {return <Navigate />} 
  else 
  {return <SignUp />}
}


export const routes = [
    {path: '/login' , element: <LoginPage />},
    {path: '/signup' , element: <SignUp />},
    {path: '/' , element: <Posts />},
    {path: '*' , element: <ErrorPage />},
  
  ]

  export const privateRoutes = [
    {path: '/login' , element: <LoginPage />},
    {path: '/post/:id' , element: <CurrentPost/>},
    {path: '/post/:id/edit' , element: <EditPost />},
    {path: '/contact' , element: <Contact />},
    {path: '*' , element: <ErrorPage />},
  ]