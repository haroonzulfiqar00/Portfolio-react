import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vv6sji5', 'template_y8ghn3s', form.current, {
        publicKey: 'ZqMqvz7mmFfrBclGb',
      })
      .then(
        () => {
          setSubmitMessage('Form submitted successfully!'); // Show success message
          form.current.reset(); // Clear the input fields
          setTimeout(() => setSubmitMessage(''), 3000); // Hide message after 3 seconds
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSubmitMessage('Submission failed. Please try again.');
        },
      );
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="col-lg-12" id='form-here'>
      <div className="row p-lg-5 w-100">
        <div className="col-lg-6">
          <div className="frm-btn">
            <button className='btn-global' onClick={toggleForm}>
              {showForm ? 'Hide form' : 'Show form'}
            </button>
          </div>
        </div>
        <div className="col-lg-6">
          {showForm && (
            <div>
              <form className='customform' autoComplete='off' ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" placeholder="Your Name" name="user_name" required />
                <label>Email</label>
                <input type="email" placeholder="Your Email" name="user_email" required />
                <label>Message</label>
                <div className="form-control-custom">
                  <input className="input input-alt" name="message" placeholder="Type something intelligent" type="text" />
                  <span className="input-border input-border-alt"></span>
                </div>
                <button type="submit" value="Send">Submit</button>
              </form>

              {submitMessage && (
                <div className="submit-message">
                  <p>{submitMessage}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
