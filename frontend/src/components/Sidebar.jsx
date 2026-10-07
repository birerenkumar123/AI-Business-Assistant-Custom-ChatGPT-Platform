import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard, MessageSquare, Files, Users, Settings, ShieldCheck, X, Bot
} from "lucide-react";

const links = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/chat", label: "AI Chat", icon: MessageSquare },
  { to: "/documents", label: "Knowledge Base", icon: Files },
  { to: "/admin", label: "Admin Console", icon: ShieldCheck },
];

export default function Sidebar({ open, onClose }) {
  return (
    <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
      <div className="brand">
        <div className="brand-mark"><Bot size={21} /></div>
        <div>
          <strong>AI Business</strong>
          <span>Assistant</span>
        </div>
        <button className="mobile-close" onClick={onClose}><X size={20}/></button>
      </div>

      <div className="workspace">
        <span className="workspace-label">WORKSPACE</span>
        <div className="workspace-card">
          <div className="company-avatar">AC</div>
          <div><strong>Acme Corporation</strong><small>Business workspace</small></div>
        </div>
      </div>

      <nav>
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} onClick={onClose} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <Icon size={18}/><span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <NavLink to="/admin" className="nav-item"><Users size={18}/><span>Users & Roles</span></NavLink>
        <button className="nav-item"><Settings size={18}/><span>Settings</span></button>
        <div className="user-mini">
          <div className="avatar">NL</div>
          <div><strong>Nagesh Lagad</strong><small>Administrator</small></div>
        </div>
      </div>
    </aside>
  );
}