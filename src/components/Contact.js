import React, { useState } from 'react';
import { navigate } from 'gatsby-link';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const Contact = () => {

  let [state, setState] = useState([])
  let [hasError, setHasError] = useState(false)

  const handleChange = (e, id) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value; 
    const fieldID = id;

    // create input object
    const input = {
      [fieldName]: fieldValue,
      "id": fieldID,
    }
    
    // create new state 
    const newState = state.map((obj) => {
      // input data if id found
      if(obj.id === fieldID) {
        // update the field with new input data
        return {...obj, [fieldName]: fieldValue}
      }
      return obj;
    })

    
    let inputFoundinState = false;

    // chech the state for our input id and return true if found 
    for (let i = 0; i < state.length; i++) {
      if(state[i].id === fieldID) inputFoundinState = true;
    }

    // update the state if input found with the state
    if(inputFoundinState) setState([...newState]) 
    
    // or add the input to the current state
    if(!inputFoundinState) setState([...state, input])

  };
  
  const checkForErrors = () => {
    if(!state || state.length < 5 || state.length === 6 ) {
      setHasError(true)
      return true;
    };
    if(state.length === 5) {
      setHasError(false)
      return false;
    };
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    checkForErrors();

    if(!checkForErrors()) {
      // remove id's from State 
      const cleanData = state.map(obj => {
        delete obj.id;
        return obj;
      })

      let objectData = {} 
      
      // add values to our new data Object
      cleanData.forEach((obj) => {
        Object.keys(obj).forEach(key => {
          objectData[key] = obj[key]
        })
      })

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...objectData,
        }),
      })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
    }

  };

    return (
      <div id="RequestAppointment">
        <form
          name="beehappycali.com"
          method="post"
          action="/thank-you/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <div className="fields">
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{' '}
                <input name="bot-field" onChange={(e) => handleChange(e, 1)} />
              </label>
            </p>

            <div className="field half">
            
             <label>
              <input
                type="text"
                name="fullname"
                id="name"
                placeholder="Full Name"
                onChange={(e) => handleChange(e, 2)}
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
                onChange={(e) => handleChange(e, 3)}
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
                onChange={(e) => handleChange(e, 4)}
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
                  onChange={(e) => handleChange(e, 5)}
                />
              </label>
            </div>
            <div className="field">
              <label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  onChange={(e) => handleChange(e, 6)}
                />
              </label>
            </div>
          </div>
          {hasError && <p className='form-error'>All fields are required. Please fill out all the fields!</p>}
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
  }


export default Contact;