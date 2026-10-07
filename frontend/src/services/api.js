const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api";

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      ...(options.body instanceof FormData ? {} : { "Content-Type": "application/json" }),
      ...(options.headers || {}),
    },
  });
  if (!response.ok) throw new Error(`API request failed: ${response.status}`);
  return response.json();
}

export function chatMessage(message) {
  return request("/chat", {
    method: "POST",
    body: JSON.stringify({ message }),
  });
}

export function uploadDocument(file) {
  const form = new FormData();
  form.append("file", file);
  return request("/documents/upload", { method: "POST", body: form });
}

export function getDocuments() {
  return request("/documents");
}

export function getUsers() {
  return request("/users");
}

export function getAnalytics() {
  return request("/admin/analytics");
}

export { API_BASE_URL };