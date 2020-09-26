import React from "react";
import "../styles/app.css";
import axios from 'axios';
import Recaptcha from 'react-google-invisible-recaptcha';

class EmailForm extends React.Component{

    state = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        sent: false,
        buttonText: 'Send Message'
    }
        handleSubmit(e){
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const tel = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            this.setState({
                buttonText: '...sending'
            })

            axios({
                method: "POST", 
                url:'https://mailer.employthisguy.com/api/v1', 
                crossDomain: "true",
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                data: {
                    ToEmail:'huehairlounge@gmail.com',
                    FromEmail:'donotreply@huehairlounge.com',
                    name: name,   
                    email: email,  
                    tel: tel,
                    subject: subject,
                    message: message,
                }
            }).then((res)=>{
                if (res.data.msg === 'success'){
                    this.setState({
                        buttonText: 'Message Sent!'
                    })
                    this.setState({ sent: false }, this.resetForm())
                }else if(res.data.msg === 'fail'){
                    alert("Please contact tech support if problem continues")
                    this.setState({
                        buttonText: 'Message Failed!'
                    })
                    this.setState({ sent: false }, this.resetForm())
                }
            })
        }
    
        resetForm(){
            document.getElementById('contact-form').reset();
        }

    render() {
        return (
                <div>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <h1 className="form-title">Send Hue Hair Lounge a message!</h1>
                            <div className="form-group">
                            <label htmlFor="name">Your Name
                            <br></br>
                            <input type="text" id="name" />
                            </label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputEmail1">Email address
                                <br></br>
                                <input type="email" id="email"/>
                                </label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputPhoneNumber">Phone Number
                                <br></br>
                                <input type="phone" id="phone"/>
                                </label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputSubject">Subject
                                <br></br>
                                <input type="text" id="subject"/>
                                </label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message
                                <br></br>
                                <textarea rows="5" id="message" type="text"></textarea>
                                </label>
                            </div>
                        <button type="submit" id="form-btn" >{ this.state.buttonText }</button>
                        <Recaptcha
                            ref={ ref => this.recaptcha = ref }
                            sitekey="6LeftqgZAAAAAEeTyJvLpHPC4Dyks3uCcWK_VTji"
                            onResolved={ this.onResolved }
                        />
                </form>
                </div>
        )        
    }
}export default EmailForm