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
import RequiredAuth from './RoutMaker'
import Groups from './Groups';
import UserPage from './MarketPage';
import MarketPage from './MarketPage';


export default function ApprRoutes () {

    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Posts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:id" element={<CurrentPost />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/market" element={<MarketPage />} />
  
          {/* Protected urls */}
          <Route element={<RequiredAuth  />}>
            <Route path="/post/:id/edit" element={<EditPost />} />
            <Route path="/author/:username/" element={<AuthorList />} />
            <Route path="/profile" element={<UserPage />} />
          </Route>
  
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    );
  }