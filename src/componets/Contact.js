// import React, { useState } from "react";
// import { useForm } from "@formspree/react";
// import { validateEmail } from "../utils/helpers";
// import "./Contact.css";

// function Contact() {
//   const [email, setEmail] = useState("");
//   const [userName, setUserName] = useState("");
//   const [message, setMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [state, handleSubmit] = useForm("YOUR_FORMSPREE_FORM_ID");

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "email") {
//       setEmail(value);
//     } else if (name === "userName") {
//       setUserName(value);
//     } else {
//       setMessage(value);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     if (!validateEmail(email) || !userName) {
//       setErrorMessage("Email or Name is invalid");
//       return;
//     }

//     if (!message) {
//       setErrorMessage("Message is required.");
//       return;
//     }

//     handleSubmit(e);
//   };

//   return (
//     <section id="reach-out" className="contact">
//       <div className="flex-row">
//         <h2 className="section-title secondary-border">Reach Out</h2>
//       </div>

//       <div className="contact-form">
//         <h3>Contact Me</h3>
//         <form className="form" onSubmit={handleFormSubmit}>
//           <label htmlFor="contact-name">Your Name</label>
//           <input
//             value={userName}
//             name="userName"
//             onChange={handleInputChange}
//             type="text"
//             id="contact-name"
//             placeholder="Your Name"
//           />

//           <label htmlFor="contact-email">Your Email</label>
//           <input
//             value={email}
//             name="email"
//             onChange={handleInputChange}
//             type="email"
//             id="contact-email"
//             placeholder="Your Email"
//           />

//           <label htmlFor="contact-message">Message</label>
//           <textarea
//             value={message}
//             name="message"
//             onChange={handleInputChange}
//             id="contact-message"
//             placeholder="Your Message"
//           ></textarea>
//           <button type="submit" disabled={state.submitting}>
//             Submit
//           </button>
//         </form>
//         {state.succeeded ? (
//           <div>
//             <p className="success-text">Message sent successfully!</p>
//           </div>
//         ) : (
//           <div>
//             {state.errors.length > 0 && (
//               <p className="error-text">
//                 Failed to send message. Please try again later.
//               </p>
//             )}
//             {errorMessage && (
//               <p className="error-text">{errorMessage}</p>
//             )}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default Contact;
