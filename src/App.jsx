
import './App.css'
import Layout from './components/Layout'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import router from './components/router'



function App() {

  return (
    <>

      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>

    </>
  )
}

export default App
