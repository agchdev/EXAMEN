import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Plantilla from './layout/Plantilla'
import Home from './pages/Home'
import Contacto from './pages/Contacto'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Plantilla/>}>
            <Route index element={<Home/>}/>
            <Route path='/:categoria' element={<Home/>}/>
            <Route path='/Contacto' element={<Contacto/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
