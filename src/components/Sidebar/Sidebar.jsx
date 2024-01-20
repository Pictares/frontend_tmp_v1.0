import { Navigation } from '../Navigation/Navigation'
import s from './Sidebar.module.scss'

export const Sidebar = (props) => {
  return (
    <div className={s.sidebar}>
      <Navigation />
    </div>
  )
}
