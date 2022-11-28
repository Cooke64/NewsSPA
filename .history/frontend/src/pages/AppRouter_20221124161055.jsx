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
import Req


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
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Posts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:id" element={<CurrentPost />} />
  
          {/* Protected urls */}
          <Route element={<RequiredAuth  />}>
            <Route path="/post/:id/edit" element={<EditPost />} />
            <Route path="/author/:username/" element={<AuthorList />} />
          </Route>
  
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    );
  }