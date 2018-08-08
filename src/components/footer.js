import React from 'react'
import Link from 'gatsby-link'
import '../styles/footer.css'

const Footer = () => (
    <div className="footer">
        <div className="footer-column">
            <h6>Contact Us</h6>
            <small>821 West 10 Scottville, MI <br/> 49454</small>
            <small><i>Phone</i> (231) 757-2500</small>
            <small><i>Fax</i> (231) 757-9284</small>
        </div>
        <div className="footer-column">
            <h6>Office Hours</h6>
            <small>Mon-Tue 8:15am-5:00pm</small>
            <small>Wed 12:00-7:30pm</small>
            <small>Thu 8:15-11:30am</small>
            <small>Fri 8:15am-4:00pm</small>
        </div>
        <div className="footer-column">
            <h6>Emergencies</h6>
            <small>Call 911 if you have symptoms of chest pain, shortness of breath, a change in mental status, uncontrolled bleeding, or inability to walk. For less urgent matters, click here for instructions.</small>
        </div>
        
        <div className="footer-column">
        </div>
    </div>
)

export default Footer