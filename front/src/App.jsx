import { useState } from 'react'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Featured } from './components/Featured'
import { Header } from './components/Header'
import { BannerImage } from './components/BannerImage'
import { Integrantes } from './components/Integrantes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main className="flex-shrink-0">
        <Nav />
        <Header />
        <Featured />
        <BannerImage />
        <Integrantes />
      </main>
      <Footer />
    </div>
  )
}

export default App
