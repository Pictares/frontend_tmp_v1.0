import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { privatRoutes, publicRoutes } from '../../routes/routes'

export const AppRouter = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuth)

  return (
    <Routes>
      {isAuth
        ? privatRoutes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))
        : publicRoutes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
    </Routes>
  )
}
