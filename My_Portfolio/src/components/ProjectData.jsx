
import auth from "../assets/auth.jpg";
import chat from "../assets/chat.jpg";

const ProjectData = [
  {
    imgsrc: auth,
    title: "Authentication",
    text: " This project showcases a robust authentication system with user registration, encrypted password storage in MongoDB Atlas, and secure JWT-based access via HTTP-only cookies. The React frontend interacts with the backend API using axios for efficient and secure authentication.",
    open: "https://authh-wheat.vercel.app/",
    source: "https://github.com/adarshsingh1706/Auth",
  },

  {
    imgsrc: chat,
    title: "Chat Here",
    text: "Developed a real-time chat application using Node.js, Express.js, and Socket.io to facilitate bi-directional communication via websockets. Implemented features include message broadcasting and dynamic message updates. The application ensures efficient and seamless real-time messaging between connected clients.",
    open: "https://chatapp-68kn.onrender.com/",
    source: "https://github.com/adarshsingh1706/chatApp",
  },
  {
    imgsrc:
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Password Generator",
    text: "This React project is a Password Generator app that dynamically creates secure passwords based on user preferences.",
    open: "https://password-generator-sooty-nine.vercel.app/",
    source:
      "https://github.com/adarshsingh1706/React-js/tree/main/Projects/passwordGenerator",
  },
];

export default ProjectData;
