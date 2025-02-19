import React from 'react'

const Buscador = ({cambiar}) => {
  
  return (
    <form className='flex justify-center items-center m-2 flex-col'>
      <p>Buscador</p>
      <input className='border w-100 m-auto' type="search" placeholder='Hola!' onChange={(e) => cambiar(e.target.value)} />
    </form>
  )
}

export default Buscador