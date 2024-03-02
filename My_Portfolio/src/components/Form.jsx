import "./FormStyle.css";


import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text"></input>

        <label>Email</label>
        <input type="email"></input>

        <label>Subject </label>
        <input type="text"></input>

        <label>Message</label>
        <textarea rows="7" placeholder="What's on your mind?"/>

        <button className="button">Submit</button>
      </form>
    </div>
  )
}

export default Form