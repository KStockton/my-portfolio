import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  message: Yup.string()
    .min(1, 'Too Short!')
    .required('Required')
})

const Contact = () => (
  <Formik
    initialValues={{ name: '', email: '', message: '' }}
    validationSchema={SignupSchema}

    onSubmit={(values, actions) => {
    
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
      <form onSubmit={handleSubmit} id='contact-form'>
        <label htmlFor='name'>Your Name</label>
        <input
          type='name'
          name='name'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          placeholder='Enter Name'
          />
        { errors.name && touched.name && <div>{errors.name}</div>}
        <label htmlFor='email'>Your Email</label>
        <input 
          type='email'
          name='email'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          placeholder='Enter Email'
          />
        { errors.email && touched.email && <div>{errors.email}</div>}
        <label htmlFor='message'>Your Message</label>
        <Field
          component='textarea'
          name='message'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.message}
          placeholder='Enter Message'
          />
        { errors.message && touched.message && <div>{errors.message}</div>}
        {status && status.msg && <div>{status.msg}</div>}
          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </form>
    )}
    />
    
  

)

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
