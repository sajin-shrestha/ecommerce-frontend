const ACCESS_TOKEN_KEY = 'accessToken'

// Access Token Functions
export const setAccessToken = (accessToken: string): void =>
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)

export const getAccessToken = (): string | null =>
  localStorage.getItem(ACCESS_TOKEN_KEY)

export const clearAccessToken = (): void =>
  localStorage.removeItem(ACCESS_TOKEN_KEY)
