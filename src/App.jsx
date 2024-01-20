import s from './App.module.scss'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { initialyzeApp } from './redux/initialyze-reducer'
import { AppRouter } from './components/AppRouter/AppRouter'

export const App = (props) => {
  const state = useSelector((state) => state.auth)
  const isInitialyzed = useSelector((state) => state.initialyze.isInitialyzed)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialyzeApp())
  }, [])

  if (!isInitialyzed) return <div>Initialyze...</div>

  return (
    <div className={s.app}>
      <Header />
      <Sidebar />
      <div className={s.main}>
        <AppRouter />
      </div>
      <Footer />
    </div>
  )
}
