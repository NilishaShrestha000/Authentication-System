
import './App.css'
import Layout from './components/Layout'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import router from './components/router'
import { ThemeProvider } from './context/ThemeContext'



function App() {

  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default App
