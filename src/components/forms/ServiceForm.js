import React, { useContext } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import styles from './Form.module.css';
import { ModalContext }  from '../../contexts/context.js';


const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Заполните поле';
  } else if (/[0-9]/.test(values.title)) {
    errors.title = 'В поле не должно быть цифр';
  }

  if (!values.lastName) {
    errors.city = 'Заполните поле';
  } else if (/[0-9]/.test(values.city)) {
    errors.city = 'В поле не должно быть цифр';
  }

  if (!values.description) {
    errors.description = 'Заполните поле';
  } else if (/[0-9]/.test(values.description)) {
    errors.description = 'В поле не должно быть цифр';
  }

  if (!values.price) {
    errors.password = 'Заполните поле';
  }

  return errors;
};

export const ServiceForm = (props) => {
  const handleClose = useContext(ModalContext);

  const formik = useFormik({
    initialValues: {
      city: '',
      title: '',
      description: '',
      price: '',
    },
    validate,
    onSubmit: async(values) => {
      delete values.passwordCheck;
      const form = JSON.stringify(values, null, 2);
      try {
        const result = await axios.post('/' , form);
        console.log(result);
        handleClose();
      } catch(err) {
        alert(err);
      }
    }
});

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <label htmlFor="city">Город</label>
      <input
        className={styles.input}
        id="city"
        name="city"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.city}
        placeholder="Город"
      />
      {formik.errors.city ? <div>{formik.errors.city}</div> : null}
      <label htmlFor="title">Название услуги</label>
      <input
        className={styles.input}
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
        placeholder="Название услуги"
      />
      {formik.errors.title ? <div>{formik.errors.title}</div> : null}

      <label htmlFor="description">Описание</label>
      <input
        className={styles.input}
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
        placeholder="Описание"
      />
      {formik.errors.description ? <div>{formik.errors.description}</div> : null}

      <label htmlFor="price">Цена</label>
      <input
        className={styles.input}
        id="price"
        name="price"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.price}
        placeholder="Цена"
      />
      <div>
      <button className={styles.button} type="submit">Создать</button>
      </div>
    </form>
  );
};