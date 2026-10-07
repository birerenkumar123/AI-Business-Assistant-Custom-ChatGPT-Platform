import React from "react";
import ChatBox from "../components/ChatBox";

export default function Chat() {
  return (
    <div>
      <div className="page-heading"><div><span className="eyebrow">AI ASSISTANT</span><h1>Chat</h1><p>Ask questions using your company knowledge base.</p></div></div>
      <ChatBox/>
    </div>
  );
}