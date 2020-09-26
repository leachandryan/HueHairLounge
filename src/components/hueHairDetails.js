import React from "react";
import "../styles/app.css";

class HueHairDetails extends React.Component{
    
    render() {
        return (

            <div id="contactUs">
            <div id="googleMaps">
                <iframe src="https://maps.google.com/maps?cid=6933170089971750216&amp;iwloc=A&amp;output=embed&amp;q=hue+hair+lounge,1315+w+grand+pkwy+s,katy+tx&amp;center=29.7607199,-95.7746727" 
                    id="ctl44_cc1_mapIframe" 
                    className="googlemapiframe" 
                    height="400" 
                    scrolling="no" 
                    width="90%"
                    title="Hue Hair Salon Location on Google Maps" 
                    >       
                </iframe>
                <h2>Accepted Payment Methods:</h2>
                <img id="payment" src={require('../images/payment.png')} alt="We Accept Cash, Debit, Credit, and Apple Pay"/>
                <h2>Business Hours:</h2>
                    <p>Tuesday	 	9:00 AM	 – 	7:00 PM</p>
                    <p>Wednesday	9:00 AM	 – 	7:00 PM</p>
                    <p>Thursday	 	9:00 AM	 – 	7:00 PM</p>
                    <p>Friday	 	9:00 AM	 – 	7:00 PM</p>
                    <p>Saturday	 	9:00 AM	 – 	5:00 PM</p>
            </div>
        </div>
        )        
    }
}export default HueHairDetails