# Darwin - macOS Simulator

A React-based macOS desktop simulator with draggable, resizable windows and multiple applications including Terminal, PDF Viewer, Camera, YouTube, Photos, Spotify, and GitHub.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
Darwin/
├── public/              # Static assets
│   └── apple.svg
├── src/
│   ├── assets/          # Images and SVG icons
│   │   ├── images/
│   │   └── svgs/        # App icons (terminal, github, youtube, etc.)
│   ├── components/
│   │   ├── Desktop/     # Desktop environment component
│   │   ├── Navbar/      # Top menu bar
│   │   ├── Taskbar/     # Bottom dock with apps
│   │   ├── Macwindow.jsx    # Draggable window component
│   │   └── Screen.jsx       # Main screen container
│   ├── context/
│   │   └── WindowContext.jsx  # Window state management
│   ├── app.config.js    # App configuration (ADD/EDIT APPS HERE)
│   ├── App.jsx          # Root component
│   └── main.jsx         # Entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 How to Customize

### Adding a New App

1. **Add your app icon** to `src/assets/svgs/`

2. **Edit `src/app.config.js`** and add your app to the apps array:

```javascript
import myapp from "./assets/svgs/myapp.svg";

const apps = [
  // ... existing apps
  {
    id: "MyApp",           // Unique identifier
    name: "My App",        // Display name
    icon: myapp,           // Icon import
    minWidth: 420,         // Minimum window width
    minHeight: 260,        // Minimum window height
  },
];
```

3. **Set default window position** in `DEFAULT_BOUNDS`:

```javascript
export const DEFAULT_BOUNDS = {
  // ... existing bounds
  MyApp: { x: 300, y: 200 },  // Starting position (x, y)
};
```

4. **Create your app component** in `src/components/Taskbar/Apps/myapp/MyApp.jsx`

### Changing App Details

**Edit `src/app.config.js`:**

- **Change app name:** Modify the `name` property
- **Change icon:** Replace the icon import and update the `icon` property
- **Adjust window size:** Change `minWidth` and `minHeight` values
- **Reposition windows:** Update coordinates in `DEFAULT_BOUNDS`

### Customizing Appearance

- **Window styles:** Edit `src/components/macwindow.scss`
- **Screen/Desktop:** Edit `src/components/screen.scss`
- **Global styles:** Edit `src/index.scss`

## 🛠️ Key Technologies

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **SASS** - CSS preprocessor
- **react-rnd** - Draggable and resizable windows
- **react-console-emulator** - Terminal emulation

## 🧩 Core Components

### WindowContext
Manages window state (open/close, position, size, z-index). Use the hooks:
- `openWindow(id, defaults)` - Open or focus a window
- `closeWindow(id)` - Close a window
- `bringToFront(id)` - Bring window to front
- `updateBounds(id, bounds)` - Update position/size

### Macwindow
Draggable, resizable window component that wraps each app. Handles:
- Window controls (close, minimize, maximize)
- Drag and resize functionality
- Z-index management

### Screen
Main container that renders the desktop, navbar, and taskbar.

## 📸 App Features

### Camera & Photos Integration
The Camera and Photos apps are synchronized through browser localStorage:
- **Camera App** - Captures photos from your webcam and saves them to localStorage
- **Photos App** - Automatically displays all photos saved by the Camera app
- Photos persist across browser sessions until localStorage is cleared
- Both apps share the same data source, keeping them in perfect sync

### Customizing YouTube & Spotify Playlists

To change the embedded playlists:

**YouTube** (`src/components/Taskbar/Apps/youtube/Youtube.jsx`):
```jsx
<iframe 
  src="https://www.youtube.com/embed/videoseries?list=YOUR_PLAYLIST_ID" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin" 
  allowfullscreen 
/>
```

**Spotify** (`src/components/Taskbar/Apps/spotify/Spotify.jsx`):
```jsx
<iframe 
  src="https://open.spotify.com/embed/playlist/YOUR_PLAYLIST_ID?utm_source=generator&theme=0" 
  height="352" 
  frameBorder="0" 
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
  loading="lazy" 
/>
```

## 📝 Configuration Files

- **vite.config.js** - Vite configuration
- **eslint.config.js** - ESLint rules
- **package.json** - Dependencies and scripts

## 🐛 Troubleshooting

**Port already in use:**
```bash
# Vite will automatically try the next available port
# Or specify a port: vite --port 3000
```

**Build errors:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## ⚠️ Important Notes

**Responsiveness:** This project is currently not responsive and is optimized for desktop viewing only. Mobile and tablet support would require additional CSS media queries and layout adjustments.

## License

This project is licensed for personal and non-commercial use only.
See the LICENSE file for full details.