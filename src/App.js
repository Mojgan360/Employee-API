import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Error } from './components/layout'
import Dashboard from './components/page/dashboard/Dashboard'
import 'aos/dist/aos.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        {/* //ToDo: back button  for Error page*/}
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
