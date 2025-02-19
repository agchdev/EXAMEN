import React from 'react'

const DetalleProducto = ({producto, cerrar}) => {
    console.log(producto)
    return (
    <>
        <div className='w-[50%]'>
            <div className='fixed h-full'>
                <img className='w-[400px]' src={producto.images} alt="" />
                <h2 className='font-bold'>{producto.title}</h2>
                <p className='w-[400px]'>{producto.description}</p>
                <button onClick={() => cerrar()} className='bg-red-500 hover:bg-red-300 cursor-pointer text-white px-5 py-3 rounded-4xl mt-4'>CERRAR</button>
            </div>
        </div>
    </>
    )
}

export default DetalleProducto