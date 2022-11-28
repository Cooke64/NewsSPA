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
  
          {/* Protected urls */}
          <Route element={<Layout  />}>
            <Route path="/post/:id/edit" element={<EditPost />} />
            <Route path="/author/:username/" element={<EditPost />} />
          </Route>
  
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    );
  }