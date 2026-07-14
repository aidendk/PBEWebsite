import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Members from './pages/Members'
import Philanthropy from './pages/Philanthropy'
import Recruitment from './pages/Recruitment'
import Sponsors from './pages/Sponsors'
import Login from './pages/Login'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="members" element={<Members />} />
          <Route path="philanthropy" element={<Philanthropy />} />
          <Route path="recruitment" element={<Recruitment />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
