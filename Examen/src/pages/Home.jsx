import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import Buscador from '../components/Buscador'
import { useParams } from 'react-router-dom'
import DetalleProducto from '../components/DetalleProducto'

const Home = () => {
    const [productos, setProductos] = useState([])
    const [seleccionado, setSeleccionado] = useState()
    const [palabra, setPalabra] = useState("")
    const [existe, setExiste] = useState(false);

    const {categoria} = useParams()

    let cambiar = (pal) => {
        console.log(pal)
        setPalabra(pal)
    }

    let obtenerProducto = (product) => {
        setSeleccionado(product);
        setExiste(true);
    }

    let cerrar = () => {
        setExiste(!existe)
    }

    useEffect(() => {
      fetch("https://api.escuelajs.co/api/v1/products   ")
      .then(respuesta => respuesta.json())
      .then(datos => setProductos(datos))
    }, [])
    

    return (
    <>
        <Buscador cambiar={(word) => cambiar(word)}/>
        <div className='flex'>
            <section className='w-[80%] flex justify-center m-auto flex-wrap gap-4'>
                <Cards productos={productos} palabra={palabra} categoria={categoria} obtenerProducto={(product) => obtenerProducto(product)}/>
                
            </section>
            {existe && <DetalleProducto producto={seleccionado} cerrar={() => cerrar()}/>}
        </div>
    </>
  )
}

export default Home