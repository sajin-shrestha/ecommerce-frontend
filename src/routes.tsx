import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import RootLayout from './layout/RootLayout/RootLayout'
import PageNotFound from './components/PageNotFound'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Order from './pages/Order'
import CustomerService from './pages/CustomerService'
import { Suspense } from 'react'
import PageLoading from './components/PageLoading'
import { NotAuthenticatedRoute } from './auth/AuthRoutes'

const routes = [
  {
    path: '/login',
    element: (
      <NotAuthenticatedRoute>
        <Suspense fallback={<PageLoading />}>
          <Login />
        </Suspense>
      </NotAuthenticatedRoute>
    ),
  },
  {
    path: '/signup',
    element: (
      <NotAuthenticatedRoute>
        <Suspense fallback={<PageLoading />}>
          <Signup />
        </Suspense>
      </NotAuthenticatedRoute>
    ),
  },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: (
          <Navigate
            to="/home"
            replace
          />
        ),
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/aboutus',
        element: <AboutUs />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order',
        element: <Order />,
      },
      {
        path: '/customerservice',
        element: <CustomerService />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export default router
