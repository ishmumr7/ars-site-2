import React from "react";
import styles from "./ContactUs.css"

const ContactUs = () => {
  return (
    <div className="background">
      {/* division starts where the page is divided into two columns*/}
      <div className="division">
        <div>
          <p id="contactus">Contact Us</p>
        </div>
        {/* second column */}
        <div className="secondcolumn">
          <hr />
          <p id="location">Location</p>
          <p id="address">3960 Dekalb Technology Pkwy Atlanta, GA 30340</p>

          <hr />

          <p id="location"> Location</p>
          <p id="address">3960 Dekalb Technology Pkwy Atlanta, GA 30340</p>

          <hr />

          <p id="location">Location</p>
          <p id="address">3960 Dekalb Technology Pkwy Atlanta, GA 30340</p>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
