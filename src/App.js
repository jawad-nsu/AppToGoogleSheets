import React, {useState} from "react";
import "./index.css";

export default function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: ""
  }); 

  const {name, email, message} = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await fetch("https://v1.nocodeapi.com/jawad247/google_sheets/FhHwnwtTkSjOnpKK?tabId=Sheet1",
      {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([[name, email, message, new Date().toLocaleString()],]),
      }
      );
      await response.json();
      setData({ ...data, name: "", email: "", message: ""});
    } catch(err) {
      console.log(err);
    }
  };
  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
        {/* <div class="success-message">Success! Thank you for registering</div> */}
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <textarea
          id="email"
          class="form-field"
          type="text"
          placeholder="Message"
          name="message"
          value={message}
          onChange={handleChange}
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button class="form-field" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}
