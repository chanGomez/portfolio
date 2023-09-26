import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactMe() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0km25kt', 'template_fta2zks', form.current, 'aqILBfufTEWFWMxmS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      // const name = e.tagret.name
      const value = e.tagret.value

      value = ""

      alert("okay")
    };


  // const [ data, setData] = useState({
  //   firstName:"",
  //   lastName:"",
  //   email:"",
  //   phoneNumber:"",
  //   message:""
  // })

  // function handleOnchange(e){
  //   const name = e.target.name
  //   const value = e.target.value
  //   setData({...data, [name]:value})
  // }

  // function handleSubmit(e){
  //   e.preventDefault()
  //   alert("okay")
  // }
    return (
      <section id="Contact" className="contact--section">
        <div>
          {/* <p className="sub--title">Get In Touch</p> */}
          <h2>Contact Me</h2>
          {/* <p className="text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
          </p> */}
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact--form--container">
          <div className="container">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="firstName"
                id="first-name"
                // onChange={(handleOnchange)}
                // value={data.firstName}
              />
            </label>
            <label htmlFor="last-name" className="contact--label">
              <span className="text-md">Last Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="lastName"
                id="last-name"
                // onChange={(handleOnchange)}
                // value={data.lastName}
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                // onChange={(handleOnchange)}
                // value={data.email}
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">phone-number</span>
              <input
                type="number"
                className="contact--input text-md"
                name="phoneNumber"
                id="phone-number"
                // onChange={(handleOnchange)}
                // value={data.phoneNumber}
              />
            </label>
          </div>
          {/* <label htmlFor="choode-topic" className="contact--label">
            <span className="text-md">Choose a topic</span>
            <select id="choose-topic" className="contact--input text-md">
              <option>Select One...</option>
              <option>Item 1</option>
              <option>Item 2</option>
              <option>Item 3</option>
            </select>
          </label> */}
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              name="message"
              id="message"
              rows="8"
              placeholder="Type your message..."
            // onChange={(handleOnchange)}
            // value={data.message}
            />
          </label>
          {/* <label htmlFor="checkboc" className="checkbox--label">
            <input type="checkbox" required name="checkbox" id="checkbox" />
            <span className="text-sm">I accept the terms</span>
          </label> */}
          <div>
            <button className="btn btn-primary contact--form--btn button-86">Submit</button>
            
          </div>
        </form>
      </section>
    );
  }