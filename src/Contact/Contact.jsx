import React, {Component} from 'react';
import './Contact.scss'

 export default class Contact extends Component{
   constructor(){
     super()

     this.state ={
      name: '',
      email: '',
      message: ''
     }
   }

   handleChangle = (event) => {
     const { name, value } = event.target
     this.setState({[ name ]: value})
   }

   handleSubmit = (event) => {
    event.preventDefault()
    alert('hi')
   }
render() {

  return (
    <form onSubmit={this.handleSubmit}>
        <label for="name">Your Name</label>
        <input id="name" name="name" placeholder="name" onChange={this.handleChangle}/>
        <label for="email">Email</label>
        <input id="email" name="email" placeHolder="Enter Email" onChange={this.handleChange}/>
        <textarea name="message" id="message" type="text" onChange={this.handleChange}></textarea>
        <button>Submit</button>
      </form>
  )
}
}