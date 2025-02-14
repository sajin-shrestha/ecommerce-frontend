import { Navigate, useLocation } from 'react-router-dom'
import useAuth from './useAuth'
import PageLoading from '../components/PageLoading'

interface IRouteProps {
  children: React.ReactNode
}

export const AuthenticatedRoute: React.FC<IRouteProps> = ({ children }) => {
  const { isLoggedIn, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) {
    return <PageLoading />
  }

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    )
  }

  return children
}

export const NotAuthenticatedRoute: React.FC<IRouteProps> = ({ children }) => {
  const { isLoggedIn, isLoading } = useAuth()

  if (isLoading) {
    return <PageLoading />
  }

  if (isLoggedIn) {
    return (
      <Navigate
        to="/home"
        replace
      />
    )
  }

  return children
}
