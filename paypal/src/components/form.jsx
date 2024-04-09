import React from 'react';
import "../Styles/form.css";

const Form = () => {
  return (
    <div className="form-container">
      <div className="form_head">
        <h2 className='font-medium'>Get Started</h2>
        <p>Tell us little about your business so we can connect you with the right people</p>
      </div>
      <div className="form_input_tag">
        <input type="text" className="form-input" placeholder="First Name*" />
        <input type="text" className="form-input" placeholder="Last Name*" />
        <input type="email" className="form-input" placeholder="Work Email*" />
        <input type="text" className="form-input" placeholder="Phone*" />
        <input type="text" className="form-input" placeholder="Company Name*" />
        <input type="text" className="form-input" placeholder="Company Website*" />
        <select className="form-select form-input" defaultValue="US">
          <option value="US">United States</option>
        </select>
        <select className="form-select form-input" defaultValue="">
          <option value="" disabled>Select Anual Sales</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        <select className="form-select form-input" defaultValue="No">
          <option value="" disabled>Do you already have an Paypal business account</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className='form_foot'>
        <input type="checkbox" id="accept" className="form-checkbox h-6 w-6 align-middle" />
        <label className="text-sm "htmlFor="accept">I have already accepted the <span>PayPal Private Policy.</span></label>
      </div>
      <p className="m-4 w-50 text-xs text-left">I consent to PayPal contacting me by phone or email, and sending me product or industry relevant to my query. I know I can unsubscribe at any time.</p>
      <button type="submit" className="form-submit">Submit</button>
      <h3 className='text-center'>*Require fields</h3>
    </div>
  );
}

export default Form;
