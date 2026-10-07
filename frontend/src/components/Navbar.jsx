import React from "react";
import { Menu, Bell, Search, LogOut } from "lucide-react";

export default function Navbar({ onMenu, onLogout }) {
  return (
    <header className="navbar">
      <button className="menu-button" onClick={onMenu}><Menu size={22}/></button>
      <div className="search-box"><Search size={17}/><input placeholder="Search your workspace..." /></div>
      <div className="nav-actions">
        <button className="icon-button"><Bell size={19}/><span className="notification-dot"/></button>
        <button className="logout-button" onClick={onLogout}><LogOut size={17}/> Logout</button>
      </div>
    </header>
  );
}