import React from 'react'

export const required = value => (value ? null : "Required");
export const emailField = ({ input, type, meta: { touched, error, warning } }) => (
    <div>
      <input className="input-lg" id='emailField' {...input} placeholder={"Email"} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
);
export const passwordField = ({ input, type, meta: { touched, error, warning } }) => (
    <div>
      <input className="input-lg" id='passwordField' {...input} placeholder={"Password"} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
);