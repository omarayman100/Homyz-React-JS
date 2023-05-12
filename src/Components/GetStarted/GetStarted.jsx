import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return(
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className="primaryText">Get Started with Homyz</span>
                <span className="secondaryText">Subscribe to find super attractive price quotes from nearby locations <br/>
                Find your residance soon
                </span>
                <button className="button">
                    <a href="mailto:Omar.ayma@outlook.com">Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
};


export default GetStarted;
