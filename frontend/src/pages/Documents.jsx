import React, { useState } from "react";
import { FileText, Search, MoreHorizontal, CheckCircle2 } from "lucide-react";
import FileUpload from "../components/FileUpload";

const initialDocs = [
  ["Employee Handbook.pdf","PDF","2.4 MB","Indexed"],
  ["Product Catalog.docx","DOCX","1.8 MB","Indexed"],
  ["Sales Data.xlsx","Excel","4.1 MB","Indexed"],
  ["Company FAQ.pdf","PDF","890 KB","Indexed"],
  ["HR Policy.pdf","PDF","1.2 MB","Processing"],
];

export default function Documents() {
  const [docs, setDocs] = useState(initialDocs);

  function addDoc(file) {
    if (!file) return;
    setDocs(d => [[file.name, file.name.split(".").pop().toUpperCase(), `${Math.max(1, Math.round(file.size/1024))} KB`, "Indexed"], ...d]);
  }

  return (
    <div>
      <div className="page-heading"><div><span className="eyebrow">KNOWLEDGE BASE</span><h1>Documents</h1><p>Manage the company files used by the RAG assistant.</p></div></div>
      <FileUpload onUploaded={addDoc}/>
      <div className="table-card">
        <div className="table-toolbar"><div className="search-box"><Search size={16}/><input placeholder="Search documents..." /></div><span>{docs.length} documents</span></div>
        <div className="table-wrap"><table><thead><tr><th>Document</th><th>Type</th><th>Size</th><th>Status</th><th/></tr></thead>
          <tbody>{docs.map(d=><tr key={d[0]}><td><div className="doc-name"><FileText size={17}/><strong>{d[0]}</strong></div></td><td>{d[1]}</td><td>{d[2]}</td><td><span className={`status ${d[3] === "Indexed" ? "success" : "warning"}`}><CheckCircle2 size={13}/>{d[3]}</span></td><td><button className="icon-button"><MoreHorizontal size={18}/></button></td></tr>)}</tbody>
        </table></div>
      </div>
    </div>
  );
}