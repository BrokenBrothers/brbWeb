import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addContact } from '../../actions/contact'

export class Form extends Component {
    state = {
        subject: "",
        email: "",
        message: "",

    };
    static propTypes = {
        addContact: PropTypes.func.isRequired
    };
    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });
    onSubmit = e => {
        e.preventDefault();
        const { subject, email, message } = this.state;
        const contact = { subject, email, message };
        this.props.addContact(contact);
    }
    render() {
        const { subject, email, message } = this.state;
        return (

            <div>
                <h2>Add Lead</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Subject</label>
                        <input
                            type="text"
                            name="subject"
                            onChange={this.onChange}
                            value={subject}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input

                            type="email"
                            name="email"
                            onChange={this.onChange}
                            value={email}
                        />
                    </div>
                    <div>
                        <label>Message</label>
                        <input

                            type="text"
                            name="message"
                            onChange={this.onChange}
                            value={message}
                        />
                    </div>

                    <div>
                        <button typy="submit">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default connect(null, { addContact })(Form);
