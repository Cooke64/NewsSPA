import Posts from "../pages/Posts";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import CurrentPost from "../pages/CurrentPost";
import EditPost from "../pages/EditPost";
import LoginPage from "./LoginPage";
import SignUp from "./Register";
import 

export const routes = [
    {path: '/login' , element: <LoginPage />},
    {path: '/signup' , element: <SignUp />},
    {path: '/' , element: <Posts />},
    {path: '/contact' , element: <Contact />},
    {path: '/post/:id' , element: <CurrentPost/>},
    {path: '*' , element: <ErrorPage />},
  
  ]

  export const privateRoutes = [
    {path: '/' , element: <Posts />},
    {path: '/post/:id' , element: <CurrentPost/>},
    {path: '/post/:id/edit' , element: <EditPost />},
    {path: '/contact' , element: <Contact />},
    {path: '/author/:username/' , element: <Contact />},
    {path: '*' , element: <ErrorPage />},
  ]