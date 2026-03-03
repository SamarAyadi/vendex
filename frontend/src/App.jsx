
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import Notifications from './pages/Notifications'
import Products from './pages/Products'


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
}

export default App