import React from "react";
import "../styles/app.css";
import Layout from "../components/common/Layout"
import EmailForm from "../components/emailform"

class ContactUs extends React.Component {

  render() {
    return (
          <Layout>
            <EmailForm ></EmailForm>
                <br></br>
                <br></br>
              <div id='booking'>
                  <a href="tel:2817506513" className="purple"> 
                    <h1>Call Hue Hair Lounge <br></br>(281) 750-6513</h1>
                  </a>
                  <a href="mailto: huehairlounge@gmail.com" target="Email Hue Hair Lounge" className="pink">
                      <h1>Email Hue Hair Lounge at<br></br>huehairlounge@gmail.com</h1> 
                  </a>
              </div>
                <br></br>
                <br></br>        
          </Layout>
    );
  }
}

export default ContactUs