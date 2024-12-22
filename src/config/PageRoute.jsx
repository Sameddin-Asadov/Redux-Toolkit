import React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router'
import Home from '../store/pages/Home'

function PageRoute() {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Home/>}/>
       </Routes>
      
    </div>
  )
}

export default PageRoute
