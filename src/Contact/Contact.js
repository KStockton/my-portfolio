import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import chat from '../assets/chatIcon.png';


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email Required'),
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
      <div className='form-container'>
        <form onSubmit={handleSubmit} id='contact-form'>
          <h3>Connect Now</h3>
        {/* <img src={chat} alt='chat icon'/> */}
          <input
            type='name'
            name='name'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            placeholder='Name'
            />
          { errors.name && touched.name ? <div>{errors.name}</div> : <div/>}
          <input 
            type='email'
            name='email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder='Enter Email'
            />
          { errors.email && touched.email ? <div>{errors.email}</div> : <div/>}
          <Field
            component='textarea'
            name='message'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            placeholder='Enter Message'
            />
          { errors.message && touched.message ? <div>{errors.message}</div> : <div/>}
          { status && status.msg ? <div>{status.msg}</div> : <div/>}
            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </form>
      </div>
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
