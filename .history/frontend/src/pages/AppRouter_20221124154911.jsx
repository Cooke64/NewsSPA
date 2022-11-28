import React from 'react'
import { Route, Routes,  } from 'react-router-dom'
import Layout from '../components/Layout'
import Posts from "../pages/Posts";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import CurrentPost from "../pages/CurrentPost";
import EditPost from "../pages/EditPost";
import LoginPage from "./LoginPage";
import SignUp from "./Register";
import AuthorList from "./AuthorList";



export default function AppRouter({linkArray}) {
    
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
          {
            linkArray.map(item => (
              <Route 
                key={item.path}
                path={item.path}
                element={item.element} 
              />
              ))
          }
        </Route>

    </Routes>
  )
}

function ApprRoutes () {

    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<LoginPage />} />
          <Route path="/" element={<Posts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:id" element={<CurrentPost />} />
  
          {/* we want to protect these routes */}
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="/" element={<Home />} />
          </Route>
  
          <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
            <Route path="editor" element={<Editor />} />
          </Route>
  
  
          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="admin" element={<Admin />} />
          </Route>
  
          <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
            <Route path="lounge" element={<Lounge />} />
          </Route>
  
          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    );
  }