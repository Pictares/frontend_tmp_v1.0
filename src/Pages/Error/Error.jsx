import s from './Error.module.scss'

export const Error = (props) => {
  return (
    <div className={s.error}>
      <h1>Error 404</h1>
      <p>Page not found</p>
    </div>
  )
}
