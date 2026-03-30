# Hostal Management Dashboard

A modern React + Vite admin dashboard for hostel management, built with dark/light theme, responsive design, and animated UI.

##  Features

- Dark/Light theme toggle
- Sidebar collapse/expand + mobile-friendly sidebar overlay
- Navbar with notification and profile dropdown (outside-click close, ESC close)
- Dashboard analytics with summary cards, chart cards, and recent activity timeline
- Rooms list support: grid / table view switch
- Students feature filters (search + payment status)
- Zoom controls (in/out/reset)
- Fully responsive for mobile/tablet/desktop
- CSS variables and Tailwind utilities for consistent theme styling

##  Tech Stack

- React 19
- Vite
- Tailwind CSS
- Framer Motion (animations)
- React Router DOM (v7)
- React Icons

##  Folder structure

- `src/App.jsx` - app shell + theme + zoom + sidebar state
- `src/routes/index.jsx` - routing config
- `src/shared/components/layout` - layout components (Navbar, Sidebar)
- `src/shared/styles/global.css` - theme variables and base CSS
- `src/features/dashboard` - dashboard module and cards
- `src/features/rooms` - rooms module (grid/table)
- `src/features/students` - student module + filter UI
- `src/features/payments` - payments module
- `src/features/complaints` - complaints module

##  Installation

```bash
npm install
npm run dev
```

Open browser at `http://localhost:5173`.

## 🛠 Build

```bash
npm run build
npm run preview
```

## Common fixes

- `does not provide an export named 'default'`: Add `export default MyComponent` or use named imports correctly.
- `Failed to resolve import`: Use correct relative path from file to target component.
- Theme or color mismatch: prefer the shared class tokens like `theme-card`, `theme-border`, `theme-text`, etc.

##  Notes

- `App.jsx` toggles between `html.classList.add('dark')` and `html.classList.add('light')` for theme modes.
- Use `base.css`/`global.css` variables to keep theme colors consistent across all components.
- `Sidebar.jsx` uses `framer-motion` for smooth expand/collapse.
- `Navbar.jsx` uses `AnimatePresence` for panel visibility transitions.

---

Repository: `Hostal-Management` (owner: `khushbuu-07`).
