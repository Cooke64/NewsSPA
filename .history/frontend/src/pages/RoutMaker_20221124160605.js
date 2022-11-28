import Posts from "./Posts";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import CurrentPost from "./CurrentPost";
import EditPost from "./EditPost";
import LoginPage from "./LoginPage";
import SignUp from "./Register";
import AuthorList from "./AuthorList";

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
    {path: '/author/:username/' , element: <AuthorList />},
    {path: '*' , element: <ErrorPage />},
  ]