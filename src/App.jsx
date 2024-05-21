import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Footer from './components/footer/Footer'
import Fullpages from './components/fullpages/Fullpages'
function App() {
  return (
    <>
    <div className='container'>
      <Routes>
        <Route path='/' element={
        <div>
          <Fullpages />
        </div>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
    </>
  )
}

export default App
