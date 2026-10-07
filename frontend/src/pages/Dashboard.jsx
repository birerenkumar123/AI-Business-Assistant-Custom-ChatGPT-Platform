import React from "react";
import { MessageSquare, Files, Users, Activity, ArrowUpRight, TrendingUp } from "lucide-react";
import ChatBox from "../components/ChatBox";

const stats = [
  ["Total Conversations", "1,284", "+18.4%", MessageSquare],
  ["Knowledge Documents", "342", "+12.8%", Files],
  ["Active Users", "86", "+9.2%", Users],
  ["AI Resolution Rate", "91.6%", "+4.7%", Activity],
];

export default function Dashboard() {
  return (
    <div>
      <div className="page-heading"><div><span className="eyebrow">OVERVIEW</span><h1>Business Dashboard</h1><p>Monitor your AI assistant and company knowledge activity.</p></div><button className="primary-button compact">View analytics <ArrowUpRight size={16}/></button></div>

      <div className="stats-grid">
        {stats.map(([label,value,change,Icon]) => <div className="stat-card" key={label}>
          <div className="stat-top"><span>{label}</span><div className="stat-icon"><Icon size={18}/></div></div>
          <strong>{value}</strong><small><TrendingUp size={13}/> {change} this month</small>
        </div>)}
      </div>

      <div className="dashboard-grid">
        <ChatBox/>
        <div className="activity-card">
          <div className="section-title"><div><h2>Recent Activity</h2><p>Latest workspace events</p></div></div>
          {["Document indexed: HR Policy.pdf","New conversation started","User added: Priya Sharma","Vector index updated","Monthly analytics generated"].map((x,i)=>
            <div className="activity-row" key={x}><span className="activity-dot"/><div><strong>{x}</strong><small>{i+2} hours ago</small></div></div>
          )}
        </div>
      </div>
    </div>
  );
}