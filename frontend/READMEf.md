# AI Business Assistant — Frontend

This frontend follows the frontend organization specified in the main project README.

## Structure

```text
frontend/
├── src/
│   ├── components/
│   │   ├── ChatBox.jsx
│   │   ├── Sidebar.jsx
│   │   ├── FileUpload.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Chat.jsx
│   │   ├── Documents.jsx
│   │   └── Admin.jsx
│   ├── services/
│   │   └── api.js
│   └── App.jsx
├── package.json
└── Dockerfile
```

Additional Vite entry/config files are included so the directory is directly runnable.

## Run

```bash
npm install
npm run dev
```

Set `VITE_API_BASE_URL` in `.env` when connecting the FastAPI backend.
