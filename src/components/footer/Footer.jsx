import React from "react";
import "./footer.css";
import app_logo from "../../assets/dedline-logo-dark.png";
import twitter_icon from "../../assets/twitter-icon.png";
import github_icon from "../../assets/github-icon.png";
import internet_icon from "../../assets/internet.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={app_logo} alt="" />
      <h3>Made with ❤️ using React, Flutter, Firebase & Hive.</h3>
      <p>© 2025 Dedline by Ikechukwu Achom.</p>
      <div className="social-icons">
        <a
          href="https://github.com/grittydude"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github_icon} alt="GitHub" />
        </a>
        <a
          href="https://twitter.com/ikeys15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter_icon} alt="Twitter" />
        </a>
        <a
          href="https://ikechukwu-achom-d0bxmmh5l-ikechukwu-achoms-projects.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={internet_icon} alt="Web" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
