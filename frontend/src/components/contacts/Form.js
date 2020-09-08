import React, { Component } from 'react'

export class Form extends Component {
    state = {
        subject: "",
        email: "",
        message: "",
    };
    onChange = e => this.setState({
        [e.target.subject]: e.target.value
    });
    onSubmit = e => {
        e.preventDefault();
        console.log("submit");
    }
    render() {
        const { subject, email, message } = this.state;
        return (

            <div>
                <h2>Add Lead</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>subject 1</label>
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
export default Form;
