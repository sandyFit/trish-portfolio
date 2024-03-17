import React from 'react'
import { Outlet } from 'react-router-dom'
import  Footer  from './layouts/Footer'
import Navbar from './layouts/Navbar'
import Sidebar from './layouts/Sidebar'

const App = () => {
    return (
        <div className='relative'>
            <Navbar />
            <Sidebar/>
            <Outlet />
            <Footer/>
        </div>
    )
}

export default App