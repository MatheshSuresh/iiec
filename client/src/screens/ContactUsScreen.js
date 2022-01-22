import React, { useState } from "react";
import axios from "axios";

const ContactUsScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const HandleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(name,email,subject,message);
    axios
      .post("/api/contact-us", {
        name: name,
        email: email,
        subject: subject,
        message: message,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div class='container'>
        <section class='mb-4'>
          <h2 class='h1-responsive font-weight-bold text-center my-5'>
            Contact Us
          </h2>
          <p class='text-center w-responsive mx-auto mb-5'>
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>

          <div class='row'>
            <div class='col-md-9 mb-md-0 mb-5'>
              <form onSubmit={HandleFormSubmit} id='contactform'>
                <div class='row'>
                  <div class='col-md-6'>
                    <div class='md-form mb-0'>
                      <input
                        type='text'
                        name='name'
                        onChange={(e) => setName(e.target.value)}
                        class='form-control'
                      ></input>
                      <label for='name'>Your Name</label>
                    </div>
                  </div>

                  <div class='col-md-6'>
                    <div class='md-form mb-0'>
                      <input
                        type='text'
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
                        class='form-control'
                      ></input>
                      <label for='email'>Your Email</label>
                    </div>
                  </div>
                </div>

                <div class='row'>
                  <div class='col-md-12'>
                    <div class='md-form mb-0'>
                      <input
                        type='text'
                        name='subject'
                        onChange={(e) => setSubject(e.target.value)}
                        class='form-control'
                      ></input>
                      <label for='subject'>Subject</label>
                    </div>
                  </div>
                </div>

                <div class='row'>
                  <div class='col-md-12'>
                    <div class='md-form'>
                      <textarea
                        type='text'
                        name='message'
                        onChange={(e) => setMessage(e.target.value)}
                        rows='3'
                        class='form-control md-textarea'
                      ></textarea>
                      <label for='message'>Your Message</label>
                    </div>
                  </div>
                </div>

                <div class='text-center text-md-left'>
                  <button class='btn btn-warning' type='submit'>
                    Send
                  </button>
                </div>
              </form>
            </div>

            <div class='col-md-3 text-center text-warning'>
              <ul class='list-unstyled mb-0'>
                <li>
                  <i class='fas fa-map-marker-alt fa-2x'></i>
                  <p class='text-dark'>Dhaka, Bangladesh</p>
                </li>

                <li>
                  <i class='fas fa-phone mt-4 fa-2x'></i>
                  <p class='text-dark'>+880 1969535853</p>
                </li>

                <li>
                  <i class='fas fa-envelope mt-4 fa-2x'></i>
                  <p class='text-dark'>marufuislam00000@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUsScreen;
