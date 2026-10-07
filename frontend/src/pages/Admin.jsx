import React from "react";
import { Users, Shield, UserPlus, BarChart3, Settings2 } from "lucide-react";

const users = [
  ["Nagesh Lagad","nagesh@company.com","Administrator","Active"],
  ["Priya Sharma","priya@company.com","Manager","Active"],
  ["Rahul Patil","rahul@company.com","Member","Active"],
  ["Amit Deshmukh","amit@company.com","Member","Invited"],
];

export default function Admin() {
  return (
    <div>
      <div className="page-heading"><div><span className="eyebrow">ADMINISTRATION</span><h1>Admin Console</h1><p>Manage users, roles, access and workspace controls.</p></div><button className="primary-button compact"><UserPlus size={16}/> Invite user</button></div>

      <div className="admin-cards">
        <div className="admin-card"><Users/><div><strong>86</strong><span>Total users</span></div></div>
        <div className="admin-card"><Shield/><div><strong>4</strong><span>Roles configured</span></div></div>
        <div className="admin-card"><BarChart3/><div><strong>91.6%</strong><span>AI resolution</span></div></div>
        <div className="admin-card"><Settings2/><div><strong>Healthy</strong><span>Workspace status</span></div></div>
      </div>

      <div className="table-card">
        <div className="section-title"><div><h2>Users & Roles</h2><p>Role-based access for this company.</p></div></div>
        <div className="table-wrap"><table><thead><tr><th>User</th><th>Email</th><th>Role</th><th>Status</th></tr></thead>
        <tbody>{users.map(u=><tr key={u[1]}><td><strong>{u[0]}</strong></td><td>{u[1]}</td><td><span className="role-pill">{u[2]}</span></td><td><span className={`status ${u[3] === "Active" ? "success" : "warning"}`}>{u[3]}</span></td></tr>)}</tbody></table></div>
      </div>
    </div>
  );
}