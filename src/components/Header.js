import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  // add NavLinks to allow the user to navigate to the 3 pages of the app 
  return (
    <div className="header">
    <NavLink to="/AllCountries">All Countries</NavLink>
        <NavLink to="/ByName">By Name</NavLink>
        <NavLink to="/ByRegion">By Region</NavLink>
    </div>
  );
}
