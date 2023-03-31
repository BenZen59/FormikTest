import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

function YoutubeForm() {
  const initialValues = {
    name: 'Benku',
    email: 'benkuaznable@gmail.com',
    channel: 'benkuable',
  };

  const onSubmit = (values) => {
    console.log('Form data', values);
  };

  const validationSchema = yup.object({
    name: yup.string().required('Required'),
    email: yup.string().email().required('Required'),
    channel: yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log('Visited fiels', formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className='error'>{formik.errors.name}</div>
          ) : null}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>E-mail</label>
          <input
            type='email'
            id='email'
            name='email'
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.name ? (
            <div className='error'>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <input
            type='text'
            id='channel'
            name='channel'
            {...formik.getFieldProps('channel')}
          />
          {formik.touched.channel && formik.errors.name ? (
            <div className='error'>{formik.errors.channel}</div>
          ) : null}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default YoutubeForm;
