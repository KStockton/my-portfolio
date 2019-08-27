import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email Required'),
  content: Yup.string()
    .min(1, 'Too Short!')
    .required('Required')
});

const Contact = () => (
  <Formik
    initialValues={{ name: '', email: '', content: '' }}
    validationSchema={SignupSchema}

    onSubmit={ async (values, actions) => {

      actions.setSubmitting(false);

      const url = 'https://8aqpv0z2w3.execute-api.us-east-1.amazonaws.com/dev/email/send';
      const options = {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(values)
      };

      const response = await fetch(url, options);
      if (response.status === 200) {
        actions.setStatus({ success: "Email Sent" });
      } else if (!response.ok) {
        actions.setStatus({ error: 'There was an error sending your message please try again'});
      }
    }}

    render={({
      handleChange,
      touched,
      errors,
      status,
      values,
      handleBlur,
      handleSubmit,
      isSubmitting
    }) => (
      <div className='form-container' id='forms'>
        <form onSubmit={handleSubmit} id='contact-form'>
          <h3>Get In Touch <i className="far fa-comment-dots"></i></h3>
          <input
            type='name'
            name='name'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            placeholder='Name*'
          />
          { errors.name && touched.name ? <div>{errors.name}</div> : <div/>}
          <input 
            type='email'
            name='email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder='Enter Email*'
          />
          { errors.email && touched.email ? <div>{errors.email}</div> : <div/>}
          <Field
            component='textarea'
            name='content'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
            placeholder='Enter Message*'
          />
          { errors.content && touched.content ? <div>{errors.content}</div> : <div/>}
          { status && status.msg ? <div>{status.msg}</div> : <div/>}
          { status && status.success && 
            <div id='messages'>{status.success}
              <i className="fas fa-check"></i>
            </div>
          }
          { status && status.error && <p id='failure'>{status.error}</p> }
          <button type='submit' id='submit' disabled={isSubmitting}>
              Send Email
          </button>
        </form>
      </div>
    )}
  />
);

export default Contact;
