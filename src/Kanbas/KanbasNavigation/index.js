import { Link, useLocation } from "react-router-dom";
import React from "react";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGaugeHigh, faBook, faCalendarDays, faInbox, faClock, faTv, faRightToBracket, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";


function KanbasNavigation() {
    const links = [
      { name: "Account", icon: faUser, iconColor: "lightgray" },
      { name: "Dashboard", icon: faGaugeHigh, iconColor: "red" },
      { name: "Courses", icon: faBook, iconColor: "red" },
      { name: "Calendar", icon: faCalendarDays, iconColor: "red" },
      { name: "Inbox", icon: faInbox, iconColor: "red" },
      { name: "History", icon: faClock, iconColor: "red" },
      { name: "Studio", icon: faTv, iconColor: "red" },
      { name: "Commons", icon: faRightToBracket, iconColor: "red" },
      { name: "Help", icon: faCircleQuestion, iconColor: "red" },
    ];
  
    const { pathname } = useLocation();
  
    return (
      <div className="sidebar">
        <img className="nu mx-auto" src="/images/nu.png" width="75px" height="70px" />
  
        <div className="list-group list-group-kanbas">
          {links.map((link, index) => (
            <li
              className={`list-group-item list-group-item-action ${
                pathname.includes(link.name) ? "active" : ""
              }`}
              key={index}
            >
              <Link to={`/Kanbas/${link.name}`} className="list-group-item-link">
                <FontAwesomeIcon
                  icon={link.icon}
                  style={{ color: link.iconColor }}
                  size="xl"
                />
                <br />
                {link.name}
              </Link>
            </li>
          ))}
        </div>
      </div>
    );
  }
  
  export default KanbasNavigation;