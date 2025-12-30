import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Report from './pages/Report'
import AeroDashboard from './pages/AeroDashboard'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/report" element={<Report />} />
      <Route path="/aero" element={<AeroDashboard />} />
    </Routes>
  )
}

export default App
