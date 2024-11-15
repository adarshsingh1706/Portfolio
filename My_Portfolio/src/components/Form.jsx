import "./FormStyle.css";
import React, { useRef } from "react";

const Form = ({ sendEmail }) => {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current); //just to check incase of error
    sendEmail(formRef.current);
    formRef.current.reset(); // to reset the form after sending mail
  };


  return (
    <div className="form">
      <form ref={formRef} onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type="text" name="user_name"></input>

        <label>Email</label>
        <input type="email" name="user_email"></input>

        <label>Subject </label>
        <input type="text" name ="subject"></input>

        <label>Message</label>
        <textarea rows="7" placeholder="What's on your mind?" name="message" />

        <button className="button" type ="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
