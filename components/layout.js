import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

const Layout = ({children}) => {
    return (
        <div className='Content'>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}


export default Layout