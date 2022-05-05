import React from "react";
import "./index.scss";
import {
    AiFillLinkedin,
    AiOutlineInstagram,
    AiFillFacebook,
} from "react-icons/ai";
const Footer = () => {
    return (
        <div className="footer">
            <ul>
                <li>
                    <a href="https://www.instagram.com/walter12349/">
                        <AiOutlineInstagram />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/walter-santacruz-1a896b1b8/">
                        <AiFillLinkedin />
                    </a>
                </li>

                <li>
                    <a href="https://www.facebook.com/skyshot12349">
                        <AiFillFacebook />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;
