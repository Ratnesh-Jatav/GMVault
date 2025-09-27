import React, { useRef } from "react";


import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current.reset(); // Form clear ho jaye
        },
        (error) => {
          alert("❌ Failed to send message, try again!");
        }
      );
  };

  return (


    <div className="flex items-center justify-center min-h-screen ">



      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md"

      >

        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        <p className="font-bold ">ENTER YOUR FULL NAME :</p>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="border w-full p-2 mb-3 rounded"
          required
        />
        <p className="font-bold ">ENTER YOUR EMAIL :</p>
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="border w-full p-2 mb-3 rounded"
          required
        />
        <p className="font-bold ">SUBJECT :</p>
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          className="border w-full p-2 mb-3 rounded"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
export default Contact;
