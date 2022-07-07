import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Admin from './Admin'
import Books from './Books'
import EditBook from './EditBook'
import SingleBook from './SingleBook'

const MainRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Books/>} />
            <Route path='/books/:id/' element={<SingleBook/>}  />
            <Route path='/books/:id/edit' element={<EditBook/>}  />
            <Route path='/admin/' element={<Admin/>}/>
            <Route path='*' element={<h1>Page not found</h1>}/>

        </Routes>

    </div>
  )
}

export default MainRoutes