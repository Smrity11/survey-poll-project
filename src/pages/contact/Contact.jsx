/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_xcl13tp';
    const templateId = 'template_k6eh7zk';
    const publicKey = '9stJ_ccN81j7QOOUz';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Web opinionex',
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  const contact_info = [
    { logo: "mail", text: "opinionex23@.com" },
    { logo: "logo-whatsapp", text: "+965 4568 ***" },
    { logo: "logo-whatsapp", text: "+4556234" },
    {
      logo: "location",
      text: "Bangladesh , Dhaka ",
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white bg-black">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          <span className="">C</span>ontact <span className="">Us</span>
        </h3>
        

        <div
          className="mt-10 flex md:flex-row flex-col
         gap-6 max-w-5xl  md:p-6 p-2 rounded-lg mx-auto"
        >
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-5">
          <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border-2 border-fuchsia-800 px-5 py-[6px] bg-black"
      />
    <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-2 border-fuchsia-800 px-5 py-[6px] bg-black"
      />

<textarea
        cols="30"
        rows="10"
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border-2 border-fuchsia-800 px-5 py-[6px] bg-black"
      >
      </textarea>
                  <button type="submit" className="border-2 border-fuchsia-800 px-5 py-[6px]">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[10px]  text-3xl min-h-[10px] flex items-center justify-center text-white bg-fuchsia-800 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
