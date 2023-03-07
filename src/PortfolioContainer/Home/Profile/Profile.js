import React from "react";
import "./Profile.css";
import Icon from "@mdi/react";
import { mdiMicrosoftVisualStudio } from "@mdi/js";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">Brittney</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                Web Developer
                <Icon path={mdiMicrosoftVisualStudio} size={2} padding={9} />
              </h1>
              <span className="profile-role-tagline">
                Junior Web Developer for front and back end applications
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="#HireMe">
              <button className="btn primary-btn">Hire Me</button>
            </a>
            <a
              href="B.BetzoldResume.pdf"
              download="Brittney Betzold B.Betzold Resume.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
