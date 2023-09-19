import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Counter from './Counter'
import NoPage from './NoPage'
import Home from './Home'
import Layout from './Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes> 
    </BrowserRouter>
  )
}

export default App
