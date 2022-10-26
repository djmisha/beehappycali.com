import React, { useState } from 'react';
import ConfettiMaker from './ConfettiMaker';
import { navigate } from 'gatsby-link';

const Contact = () => {
  const confetti = ['🐝', '🍯', '😍'];
  let [formState, setFormState] = useState({});
  let [hasError, setHasError] = useState(false);
  let [success, setSuccess] = useState(false);

  function encodeDataToURI(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  }

  const handleInputChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    formState[fieldName] = fieldValue;
    setFormState(formState);
  };

  const handleFormErrors = () => {
    const keys = Object.keys(formState);
    const numberOfFields = keys.length;
    let error = true;

    // are there 5 fields in the object
    if (numberOfFields === 5) error = false;

    // are there any fields that are empty strings ''
    keys.forEach((key) => {
      if (formState[key] === '') error = true;
    });

    error ? setHasError(true) : setHasError(false);
    return error;
  };

  const handleSuccess = (form) => {
    setSuccess(true);
    navigate('#Contact');
    form.classList.add('hidden');
    ConfettiMaker(confetti);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const hasErrors = handleFormErrors();

    if (!hasErrors) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeDataToURI({
          'form-name': form.getAttribute('name'),
          ...formState,
        }),
      })
        .then(() => handleSuccess(form))
        .catch((error) => alert(error));
    }
  };

  return (
    <div id="RequestAppointment">
      {success && (
        <p className="success">
          Your message was sent successfully! Someone will be in touch with you
          shortly
        </p>
      )}
      <form
        name="beehappycali.com"
        method="post"
        action="/thank-you/" // this is no longer needed, since success happens on the page
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <div className="fields">
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don't fill this out:{' '}
              <input name="bot-field" onChange={(e) => handleInputChange(e)} />
            </label>
          </p>

          <div className="field half">
            <label>
              <input
                type="text"
                name="fullname"
                id="name"
                placeholder="Full Name"
                onChange={(e) => handleInputChange(e)}
              />
            </label>
          </div>
          <div className="field half">
            <label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(e) => handleInputChange(e)}
              />
            </label>
          </div>
          <div className="field half">
            <label>
              <input
                type="phone"
                name="phone"
                id="phone"
                placeholder="Phone"
                onChange={(e) => handleInputChange(e)}
              />
            </label>
          </div>
          <div className="field half">
            <label>
              <input
                type="text"
                name="preffereddate"
                id="preffereddate"
                placeholder="Preffered Date/Time"
                onChange={(e) => handleInputChange(e)}
              />
            </label>
          </div>
          <div className="field">
            <label>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                onChange={(e) => handleInputChange(e)}
              />
            </label>
          </div>
        </div>
        {hasError && (
          <p className="error">
            All fields are required. Please fill out all the fields!
          </p>
        )}
        <div className="actions">
          <input
            type="submit"
            value="Submit"
            className="secondary button icon fa-paper-plane"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
