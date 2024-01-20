import { useSelector } from 'react-redux'
import s from './AdminPanel.module.scss'
import { NavLink, Navigate } from 'react-router-dom'

export const AdminPanel = (props) => {
  const userRole = useSelector((state) => state.auth.userRole)

  if (userRole !== 'admin') {
    return (
      <div>
        <h1>Acess forbidden!</h1>
        <NavLink to="/">Home</NavLink>
      </div>
    )
  }

  return (
    <div className={s.adminPanel}>
      <h1>Admin panel</h1>
    </div>
  )
}
