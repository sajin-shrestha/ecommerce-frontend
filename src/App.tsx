import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { AuthProvider } from './auth/AuthProvider'

function App() {
  return (
    // <StoreProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    // </StoreProvider>
  )
}

export default App
