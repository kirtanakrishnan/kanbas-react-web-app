import { Link, useLocation } from "react-router-dom";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./profileNavigation.css";
import KanbasNavigation from "../KanbasNavigation";


function AccountNavigation() {
  const links = [
    { name: "Notifications" },
    { name: "Profile" },
    { name: "Files" },
    { name: "Settings" },
    { name: "ePortfolios" },
    { name: "Shared Content" },
    { name: "The Hub" },
    { name: "Qwickly Course Tools" },
    { name: "Global Announcements" },
  ];

  const { pathname } = useLocation();

  return (
        
    <div className="col-md-2 sidebar">
        <KanbasNavigation/>
      <div className="list-group list-group-profile sidebar-profile">
        {links.map((link, index) => (
          <li
            className={`list-group-item list-group-item-action ${
              pathname.includes(link.name) ? "active" : ""
            }`}
            key={index}
          >
            <Link to={`/Kanbas/Account/${link.name}`} className="list-group-item-link">
              
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </div>

      
      
    </div>
    
  );
}

export default AccountNavigation;