import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLink } from "@fortawesome/free-solid-svg-icons";
import './profile.css'; 
import AccountNavigation from ".";

function Profile() {
  return (
    
        <div className="col-md-2 col-lg-2 col-sm-0 col-xl-5 col-xxl-5 profile-body">
            <AccountNavigation/>
            Hello
          <p className="underline-text profile-text heading">Jose Annunziato's Profile</p>

          <div className="container profile-text">
            <div className="float-start">
              <FontAwesomeIcon icon={faUser} className="account" style={{ color: "#d3d5d9" }} />
            </div>
            <div className="float-end">
              <a href="edit.html">
                <button type="button" className="btn edit-profile">Edit Profile</button>
              </a>
            </div>
          </div>

          <p className="profile-text name">Jose Annunziato</p>

          <p className="profile-text sub">Contact</p>

          <p className="profile-text sub-sub">
            No registered services, you can add some on the <a href="edit.html" className="profile-link">settings</a> page.
          </p>

          <p className="profile-text sub">Biography</p>

          <p className="profile-text sub-sub">
            No registered services, you can add some on the <a href="edit.html" className="profile-link">settings</a> page.
          </p>

          <p className="profile-text sub">Links</p>

          <p className="profile-text">
            <FontAwesomeIcon icon={faLink} style={{ color: "#a9abad" }} />
            <a href="https://youtu.be/BumwDcj5Y8k?si=1_ukSSpH6mT5Y17p" className="profile-link">YouTube</a>
          </p>

          
        </div>
        
     
  );
}

export default Profile;