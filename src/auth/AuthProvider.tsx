import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  getAccessToken,
  setAccessToken,
  clearAccessToken,
} from '../utils/tokenStorage'

interface AuthContextProps {
  isLoggedIn: boolean
  isLoading: boolean
  login: (accessToken: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextProps | null>(null)

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const accessToken = getAccessToken()
        setIsLoggedIn(Boolean(accessToken))
      } finally {
        setIsLoading(false)
      }
    }
    checkAuth()
  }, [])

  const login = useCallback((accessToken: string) => {
    setAccessToken(accessToken)
    setIsLoggedIn(true)
  }, [])

  const logout = useCallback(() => {
    // logoutAPI({ refresh_token: getRefreshToken() })
    clearAccessToken()
    setIsLoggedIn(false)
  }, [])

  const value = useMemo(
    () => ({
      isLoggedIn,
      isLoading,
      login,
      logout,
    }),
    [isLoggedIn, isLoading, login, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
