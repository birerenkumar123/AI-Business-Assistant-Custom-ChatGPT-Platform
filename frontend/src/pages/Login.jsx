import React, { useState } from "react";
import { Bot, Lock, Mail, ArrowRight } from "lucide-react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo"><Bot size={28}/></div>
        <h1>AI Business Assistant</h1>
        <p>Sign in to your business workspace</p>
        <form onSubmit={e => { e.preventDefault(); onLogin(); }}>
          <label>Email</label>
          <div className="field"><Mail size={17}/><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com" type="email"/></div>
          <label>Password</label>
          <div className="field"><Lock size={17}/><input value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" type="password"/></div>
          <button className="primary-button" type="submit">Sign in <ArrowRight size={17}/></button>
        </form>
        <small>JWT/OAuth authentication can be connected through the FastAPI backend.</small>
      </div>
    </div>
  );
}