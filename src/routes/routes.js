import { Navigate } from 'react-router-dom'
import { AdminPanel } from '../Pages/AdminPanel/AdminPanel'
import { Error } from '../Pages/Error/Error'
import { Home } from '../Pages/Home/Home'
import { Login } from '../Pages/Login/Login'
import { Profile } from '../Pages/Profile/Profile'
import { Registration } from '../Pages/Registration/Registration'
import { RegistrationSuccess } from '../Pages/RegistrationSuccess/RegistrationSuccess'

export const publicRoutes = [
  { path: '/login', element: <Login /> },
  { path: '/registration', element: <Registration /> },
  { path: '/registration_success', element: <RegistrationSuccess /> },
  { path: '*', element: <Navigate to="/login" /> },
]

export const privatRoutes = [
  { path: '/login', element: <Navigate to="/" /> },
  { path: '/registration', element: <Navigate to="/" /> },
  { path: '/', element: <Home /> },
  { path: '/profile', element: <Profile /> },
  { path: '/admin_panel', element: <AdminPanel /> },
  { path: '*', element: <Error /> },
]
