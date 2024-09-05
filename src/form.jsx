
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const [showForm, setShowForm] = useState(false);
  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_vv6sji5', 'template_y8ghn3s', form.current, {
          publicKey: 'ZqMqvz7mmFfrBclGb',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  const toggleForm = () => {
    setShowForm(!showForm);
  };


  
    return (
      <div className="col-lg-12" id='form-here'>
        <div className="row p-5 w-100">
          <div className="col-lg-6">



            <div className="frm-btn ">
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
                    <input type="text " placeholder="Your Name" name="user_name" />
                    <label>Email</label>
                    <input type="email" placeholder="Your Email" name="user_email" />
                    <label>Message</label>
                    {/* <textarea name="message" /> */}
                    <div class="form-control-custom">
                    <input class="input input-alt" name="message" placeholder="Type something intelligent" required="" type="text" />
                    <span class="input-border input-border-alt"></span>
                  </div>
                    <button type="submit" value="Send"> Submit</button>
                  </form>
              </div>
            )}
          </div>
        </div>
      </div>
      
    );
  };

export default Form;