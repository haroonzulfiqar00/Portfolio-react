
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
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
  
    return (
      <form className='customform' ref={form} onSubmit={sendEmail}>
        
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        {/* <textarea name="message" /> */}
        <div class="form-control-custom">
        <input class="input input-alt" name="message" placeholder="Type something intelligent" required="" type="text" />
        <span class="input-border input-border-alt"></span>
      </div>
        <button type="submit" value="Send"> Submit</button>
      </form>
      
    );
  };

export default Form;