import React from 'react'
import { Route, Routes,  } from 'react-router-dom'
import Layout from '../components/Layout'
import { useContext } from 'react'
import { AuthContext } from '../utils/context'



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
