import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './i18n.js'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'
import DetailArticle from './pages/Article.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/article/:id" element={<DetailArticle/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
