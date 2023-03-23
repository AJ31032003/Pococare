import React from 'react'
import  { Route, Routes } from "react-router-dom"
import Login from './Login'
import Protected from './Protected'
import Register from './Register'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<>Hello</>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path="/protected" element={<Protected />}/>
    </Routes>
  )
}

export default AllRoutes