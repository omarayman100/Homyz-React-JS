import React from "react";
import "./Contactus.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contactus = () => {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/* left side */}
                <div className="flexColStart c-left">
                    <span className="orangeText">Our Contact Us</span>
                    <span className="primaryText">Easy to contact us</span>
                    <span className="secondaryText">
                        We always ready to help by providijng the best services for you. We
                        beleive a good <br /> blace to live can make your life better
                    </span>

                    <div className="flexColStart contactModes">
                        {/* first row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Call</span>
                                        <span className="secondaryText">022605555</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call Now</div>
                            </div>
                            {/* Second mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Chat</span>
                                        <span className="secondaryText">022605555</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat Now</div>
                            </div>


                        </div>

                        {/* second row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Call</span>
                                        <span className="secondaryText">022605555</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call Now</div>
                            </div>
                            {/* Second mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Chat</span>
                                        <span className="secondaryText">022605555</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Video Now</div>
                            </div>


                        </div>

                    </div>
                </div>

                {/* Right side */}
                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="contact us" />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contactus;
