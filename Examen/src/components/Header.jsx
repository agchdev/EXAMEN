import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <div className='flex p-5 bg-red-500 justify-between text-white'>
        <div>
            <h1>AGCH</h1>
        </div>
        <Nav/>
    </div>
  )
}

export default Header