import { NavLink, useSearchParams } from 'react-router-dom'
import s from './Navigation.module.scss'
import { useSelector } from 'react-redux'
import { privatLinks, publicLinks } from './links'

export const Navigation = (props) => {
  const { isAuth, userRole } = useSelector((state) => state.auth)
  const activeLink = ({ isActive }) => {
    return isActive ? s.active : ''
  }

  return (
    <div className={s.navigation}>
      {isAuth
        ? privatLinks.map((l) => (
            <div key={l.path}>
              <NavLink className={activeLink} to={l.path}>
                {l.name}
              </NavLink>
            </div>
          ))
        : publicLinks.map((l) => (
            <div key={l.path}>
              <NavLink className={activeLink} to={l.path}>
                {l.name}
              </NavLink>
            </div>
          ))}
      {isAuth && userRole === 'admin' && (
        <NavLink className={activeLink} to="admin_panel">
          Admin panel
        </NavLink>
      )}
    </div>
  )
}
