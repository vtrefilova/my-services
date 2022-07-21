import React, { useContext } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import styles from './Form.module.css';
import { ModalContext }  from '../../contexts/context.js';


const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Заполните поле';
  } else if (/[0-9]/.test(values.firstName)) {
    errors.firstName = 'В поле "Имя" не должно быть цифр';
  }

  if (!values.lastName) {
    errors.lastName = 'Заполните поле';
  } else if (/[0-9]/.test(values.lastName)) {
    errors.lastName = 'В поле "Фамилия" не должно быть цифр';
  }

  if (!values.middleName) {
    errors.middleName = 'Заполните поле';
  } else if (/[0-9]/.test(values.middleName)) {
    errors.middleName = 'В поле "Отчество" не должно быть цифр';
  }

  if (!values.password) {
    errors.password = 'Заполните поле';
  }

  return errors;
};

export const LoginForm = () => {
  const handleClose = useContext(ModalContext);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      middleName: '',
      password: '',
    },
    validate,
    onSubmit: async(values) => {
      delete values.passwordCheck;
      const form = JSON.stringify(values, null, 2);
      try {
        const result = await axios.post('/', form);
        console.log(result);
        handleClose();
      } catch(err) {
        alert(err);
      }
    }
  })
  
  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <label htmlFor="lastName">Фамилия</label>
      <input
        className={styles.input}
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        placeholder="Фамилия"
      />
      {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
      <label htmlFor="firstName">Имя</label>
      <input
        className={styles.input}
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        placeholder="Имя"
      />
      {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

      <label htmlFor="middleName">Отчество</label>
      <input
        className={styles.input}
        id="middleName"
        name="middleName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder="Отчество"
      />
      {formik.errors.middleName ? <div>{formik.errors.middleName}</div> : null}

      <label htmlFor="password">Пароль</label>
      <input
        className={styles.input}
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        placeholder="Пароль"
      />
      
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
      <button className={styles.button} type="submit">Войти</button>
      </div>
    </form>
  );
};