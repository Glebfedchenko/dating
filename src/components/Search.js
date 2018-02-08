import React, { Component } from 'react'
import { reduxForm, Field } from "redux-form";

class Search extends Component {
    render() {
        const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']
        const i = ["Male", "Female"]
        const seek = ["Male", "Female"]
        const age = [19, 22, 25, 28, 35]
        const to = ["Marry", "Date", "Chat"]
        const country = ["Ukraine", "Czhech", "Paraguay", "USA"]
        const { handleSubmit, load, pristine, reset, submitting } = this.props
        return (
            <section>
                <div className="container text-center">
                    <form onSubmit={this.handleSubmit}>
                        <div className="col-md-2 col-lg-2 col-sm-4 col-xs-5">
                            <Field name="iam" component="select">
                                <option value="">I am:</option>
                                {i.map(x => (
                                    <option value={x} key={x}>
                                        {x}
                                    </option>
                                ))}
                            </Field>
                        </div>
                        <div className="col-md-2 col-lg-2 col-sm-4 col-xs-5">
                            <Field name="seeking" component="select">
                                <option value="">Seeking a:</option>
                                {seek.map(x => (
                                    <option value={x} key={x}>
                                        {x}
                                    </option>
                                ))}
                            </Field>
                        </div>
                        <div className="col-md-2 col-lg-2 col-sm-4 col-xs-12">
                            <Field name="age" component="select">
                                <option value="">Age:</option>
                                {age.map(x => (
                                    <option value={x} key={x}>
                                        {x}
                                    </option>
                                ))}
                            </Field>
                        </div>
                        <div className="col-md-2 col-lg-2 col-sm-4 col-xs-6">
                            <Field name="to" component="select">
                                <option value="">To:</option>
                                {to.map(x => (
                                    <option value={x} key={x}>
                                        {x}
                                    </option>
                                ))}
                            </Field>
                        </div>
                        <div className="col-md-2 col-lg-2 col-sm-4 col-xs-6">
                            <Field name="country" component="select">
                                <option value="">Country:</option>
                                {country.map(x => (
                                    <option value={x} key={x}>
                                        {x}
                                    </option>
                                ))}
                            </Field>
                        </div>
                        <div className="col-md-2 col-lg-2 col-sm-4 col-xs-12">
                            <button className='searchBtn btn btn-lg btn-sm btn-md' type="submit" disabled={pristine || submitting}>SEARCH</button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

Search = reduxForm({
    form: 'searchForm'
})(Search)
export default Search