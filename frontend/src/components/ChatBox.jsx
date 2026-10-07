import React, { useState } from "react";
import { Send, Sparkles, User, Bot, Paperclip } from "lucide-react";
import { chatMessage } from "../services/api";

export default function ChatBox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hello! I’m your AI Business Assistant. Ask me about your company knowledge, documents, policies, or business data." },
  ]);
  const [loading, setLoading] = useState(false);

  async function sendMessage(e) {
    e?.preventDefault();
    const question = input.trim();
    if (!question || loading) return;
    setMessages((m) => [...m, { role: "user", text: question }]);
    setInput("");
    setLoading(true);
    try {
      const result = await chatMessage(question);
      setMessages((m) => [...m, {
        role: "assistant",
        text: result?.answer || "This is a frontend demo response. Connect the FastAPI backend to receive real RAG/LLM answers.",
      }]);
    } catch {
      setMessages((m) => [...m, {
        role: "assistant",
        text: "Backend is not connected yet. Set VITE_API_BASE_URL and start the FastAPI API.",
      }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="chat-card">
      <div className="chat-header">
        <div className="bot-title"><div className="bot-icon"><Bot size={19}/></div><div><strong>Business AI Assistant</strong><small>RAG knowledge assistant</small></div></div>
        <span className="online"><i/> Online</span>
      </div>

      <div className="messages">
        {messages.map((msg, i) => (
          <div className={`message-row ${msg.role}`} key={i}>
            <div className="message-avatar">{msg.role === "user" ? <User size={16}/> : <Bot size={16}/>}</div>
            <div className="message-bubble">{msg.text}
              {msg.role === "assistant" && i > 0 && (
                <div className="sources"><Sparkles size={13}/> Sources: company knowledge base</div>
              )}
            </div>
          </div>
        ))}
        {loading && <div className="typing">AI is thinking…</div>}
      </div>

      <form className="chat-input" onSubmit={sendMessage}>
        <button type="button" className="attach"><Paperclip size={18}/></button>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask your business assistant..." />
        <button className="send-button" type="submit"><Send size={17}/></button>
      </form>
    </section>
  );
}