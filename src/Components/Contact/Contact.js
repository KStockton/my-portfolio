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
        actions.resetForm();
        actions.setStatus({ success: "Email Sent" });
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
      <div className='form-container'>
        <form onSubmit={handleSubmit} id='contact-form'>
          <h3>Get In Touch</h3>
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
            </div>}
          <button type='submit' disabled={isSubmitting}>
              Send Email
          </button>
        </form>
      </div>
    )}
  />
    
  

);

export default Contact;




//  export default class Contact extends Component{
//    constructor(){
//      super()

//      this.state ={
//       name: '',
//       email: '',
//       message: ''
//      }
//    }

//    handleChangle = (event) => {
//      const { name, value } = event.target
//      this.setState({[ name ]: value})
//    }

//    handleSubmit = (event) => {
//     event.preventDefault()
//     alert('hi')
//    }
// render() {

//   return (
//     <form onSubmit={this.handleSubmit}>
//         <label for="name">Your Name</label>
//         <input id="name" name="name" placeholder="name" onChange={this.handleChangle}/>
//         <label for="email">Email</label>
//         <input id="email" name="email" placeHolder="Enter Email" onChange={this.handleChange}/>
//         <textarea name="message" id="message" type="text" onChange={this.handleChange}></textarea>
//         <button>Submit</button>
//       </form>
//   )
// }
