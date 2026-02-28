
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Login from './pages/Login'


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
}

export default App