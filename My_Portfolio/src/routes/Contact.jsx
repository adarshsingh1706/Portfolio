import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import Form from "../components/Form";
import React, { useRef ,useState} from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [showNotification, setShowNotification] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    
    emailjs
      .sendForm(
        
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        "form",//class of FORM
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!,email sent");
          setShowNotification(true);
          setTimeout(()=>{
            setShowNotification(false);
          },3000) // set timeout for 3sec
        },
        (error) => {
          console.log("Couldn't send mail")
          console.log(error);
          
        }
      );
  };
  return (
    <>
      <Navbar />
      <Hero2 heading="Contact ME!" text="What's on your Mind?" />
      <Form sendEmail={sendEmail} />
      {showNotification &&(<div className="notification" style={{ position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "20px",
        backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark background color
        color: "white", // Text color
        borderRadius: "5px",
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)", // Box shadow for depth
        zIndex: "9999",}}>Email Sent Succesfully</div>)};  
      <Footer />
    </>
  );
};

export default Contact;
