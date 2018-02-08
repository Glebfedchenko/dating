import React from "react";
import { reduxForm, Field } from "redux-form";
import {required, email, maxLength, maxL, minL, minLength,number} from './Forms/Errors'

/*the way input has to be rendered*/
const nameInput = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className='form-group'>
        <input id='nameInput' className="form-control" {...input} type={type} placeholder={label} />
        {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
    </div>
);
const emailInput = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className='form-group'>
        <input id='emailInput' className="form-control" {...input} type={type} placeholder={label} />
        {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
    </div>
);
const messageInput = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className='form-group'>
        <input id='messageInput' className="form-control" {...input} type={type} placeholder={label} />
        {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
    </div>
);

const ContactForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <section className='contactsection'>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="col-md-6 col-sm-6 col-lg-6">
                        <Field
                            name="firstname"
                            label='Name'
                            component={nameInput}
                            validate={required}
                        />
                        <Field
                            name="email"
                            label='Enter Email'
                            component={emailInput}
                            validate={[email, required]}
                        />
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-6">
                        <Field
                            name="message"
                            label='Your message'
                            component={messageInput}
                            validate={[required, maxL, minL]}
                        />
                    </div>
                </form>
            </div>
            <div className='text-center'>
                <button id='contactButton' className='btn btn-lg' 
                    disabled={submitting}>SUBMIT</button>
            </div>
        </section>
    );
};

export default reduxForm({
    form: 'contactForm'
})(ContactForm)