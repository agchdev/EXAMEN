import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({productos, palabra, obtenerProducto, categoria}) => {

    const productosFiltrados = categoria ? productos?.filter(producto => producto.category.name == categoria) : productos;

  return (
    <>

        {
            productosFiltrados?.map(producto => (
                producto.title.toLowerCase().includes(palabra) ?
                <div key={producto.id} className='w-[250px]' onClick={() => obtenerProducto(producto)}>
                    <div className='relative'>
                        <Link className="absolute bottom-1 left-1 bg-white/70 px-3 py2 rounded-3xl" to={"./"+producto.category.name}>{producto.category.name}</Link>
                        <img src={producto.images[0]} alt="" />
                    </div>
                    <div>
                        <p>{producto.title} <span className='font-bold'>{producto.price}€</span></p>
                    </div>
                </div>:null
            ))  
        }
    </>
  )
}

export default Cards