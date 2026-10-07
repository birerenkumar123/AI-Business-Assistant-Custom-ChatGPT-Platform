import React, { useRef, useState } from "react";
import { UploadCloud, FileText, X } from "lucide-react";
import { uploadDocument } from "../services/api";

export default function FileUpload({ onUploaded }) {
  const inputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleFile(file) {
    if (!file) return;
    setUploading(true);
    setMessage("");
    try {
      await uploadDocument(file);
      setMessage(`${file.name} uploaded successfully.`);
      onUploaded?.(file);
    } catch {
      setMessage(`${file.name} selected. Connect the FastAPI upload endpoint to process it.`);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="upload-box" onClick={() => inputRef.current?.click()}>
      <input ref={inputRef} type="file" accept=".pdf,.doc,.docx,.txt,.csv,.xlsx" hidden
        onChange={e => handleFile(e.target.files?.[0])}/>
      <UploadCloud size={30}/>
      <strong>{uploading ? "Uploading..." : "Upload company documents"}</strong>
      <span>PDF, DOCX, TXT, CSV or Excel files</span>
      {message && <small className="upload-message">{message}</small>}
    </div>
  );
}