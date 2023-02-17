import React, { useState } from 'react'
import './ContactMessage.css'
import Typewriter from 'typewriter-effect'

const ContactMessage = () => {
  const [inputValue, setInputValue] = useState("")
  // here event is an example of synthetic event
  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue)
  }
  const handleSubmit = () => {
    setInputValue("")
    window.alert('Thanks❤️ Your message has been sent!')
  }
  return (
    <div className="contact-type">
      <span id="contact-mes">"Hello there, thanks for visiting my portfolio and showing interest in getting in touch with me. If you have any questions or would like to discuss working together, this is the right place to be. I am always eager to hear from like-minded individuals and potential clients, so please don't hesitate to get in touch. You can mail, and I will get back to you as soon as possible. Alternatively, you can also reach out to me directly via connecting with me on my social media platforms. Let's start the conversation and see how we can collaborate to create something exceptional. I look forward to hearing from you soon!"</span>
      <p>Type your message and send it to me❤️</p>
      <input className="contact-typer" required="required" placeholder='Type here!' onChange={onChange}>
      </input>
      <br />
      <br />
      <div className="contact-letter">{inputValue}</div>
      <button className="submit-button" onClick={handleSubmit}>Send</button>
      <div>
        <span  className="contact-words">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 20,
              strings: [
                "Hello there, thanks for visiting my portfolio and showing interest in getting in touch with me. If you have any questions or would like to discuss working together, this is the right place to be. I am always eager to hear from like-minded individuals and potential clients, so please don't hesitate to get in touch. You can mail, and I will get back to you as soon as possible. Alternatively, you can also reach out to me directly via connecting with me on my social media platforms. Let's start the conversation and see how we can collaborate to create something exceptional. I look forward to hearing from you soon!"
              ],
            }} />

        </span>

      </div>
    </div>


  )
}

export default ContactMessage