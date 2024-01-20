import { useDispatch, useSelector } from 'react-redux'
import s from './Header.module.scss'
import { logout } from '../../redux/auth-reducer'
import image from '../../images/image.jpg'
import { NavLink } from 'react-router-dom'

export const Header = (props) => {
  const state = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const onLogOut = () => {
    dispatch(logout())
  }

  return (
    <div className={s.header}>
      <div className={s.headerLogo}>
        <NavLink to="/">
          <img src={image} alt="logotype" />
        </NavLink>
      </div>
      <div className={s.headerAuthBlock}>
        <div>
          {state.isAuth ? (
            <div>
              {state.userName}
              <button onClick={onLogOut}>Logout</button>
            </div>
          ) : (
            <button>Login</button>
          )}
        </div>
      </div>
    </div>
  )
}
