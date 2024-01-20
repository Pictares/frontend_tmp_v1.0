import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { registration } from '../../redux/auth-reducer'
import { useDispatch, useSelector } from 'react-redux'
import s from './Registration.module.scss'
import { NavLink, Navigate } from 'react-router-dom'

export const Registration = () => {
  const dispatch = useDispatch()
  const isRegistrationSuccess = useSelector(
    (state) => state.auth.isRegistrationSuccess
  )

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

    if (!values.name) {
      errors.email = 'Required'
    } else if (values.name.length < 4 || values.name.length > 10) {
      errors.email = 'Name must be from 4 to 10 charactes'
    }
    return errors
  }

  const onSubmit = (values, { setSubmitting }) => {
    dispatch(registration(values))
    setSubmitting(false)
  }

  if (isRegistrationSuccess) {
    return <Navigate to="/registration_success" />
  }

  return (
    <div className={s.registration}>
      <Formik
        initialValues={{ email: '', password: '', name: '' }}
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
            <div>
              <Field placeholder="Your name" type="name" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <div>
        <NavLink to="/login">Login</NavLink>
      </div>
    </div>
  )
}
