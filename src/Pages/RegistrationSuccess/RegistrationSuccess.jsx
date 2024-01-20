import { NavLink } from 'react-router-dom'
import s from './RegistrationSuccess.module.scss'

export const RegistrationSuccess = (props) => {
  return (
    <div className={s.registrationSuccess}>
      <h1>You successfully sign up.</h1>
      <p>
        Now you can sign in. <NavLink to="/login">login</NavLink>
      </p>
    </div>
  )
}
