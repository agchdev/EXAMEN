import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex gap-4'>
        <Link to="/">Home</Link>
        <Link to="/Contacto">Contacto</Link>
        <Link to="/Shoes">Shoes</Link>
    </nav>
  )
}

export default Nav