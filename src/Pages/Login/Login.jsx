import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { login } from '../../redux/auth-reducer'
import { useDispatch } from 'react-redux'
import s from './Login.module.scss'
import { NavLink } from 'react-router-dom'

export const Login = () => {
  const dispatch = useDispatch()

  const validate = (values) => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }

    if (!values.password) {
      errors.email = 'Required'
    } else if (values.password.length < 4 || values.password.length > 10) {
      errors.email = 'Password must be from 4 to 10 charactes'
    }
    return errors
  }

  const onSubmit = (values, { setSubmitting }) => {
    dispatch(login(values))
    setSubmitting(false)
  }

  return (
    <div className={s.registration}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={s.form}>
            <div>
              <Field placeholder="Email" type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field placeholder="Password" type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <div>
        Dont have accaunt? <NavLink to="/registration">Registration</NavLink>
      </div>
    </div>
  )
}
