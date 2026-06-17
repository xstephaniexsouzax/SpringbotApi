import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import { Header } from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
          <Route path="/usuario" element={<ListaUsuariosPage />} />
        </Routes>

      </main>
      <Footer />
    </>
  )
}

export default App
