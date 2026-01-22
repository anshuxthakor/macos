import SpotifyApp from "../Taskbar/Apps/spotify/Spotify.jsx";
import Camera from "../Taskbar/Apps/camera/Camera.jsx";
import Photos from "../Taskbar/Apps/photos/Photos.jsx";
import PdfViewer from "../Taskbar/Apps/pdfs/PdfViewer.jsx";
import Github from "../Taskbar/Apps/github/Github.jsx"
import Youtube from "../Taskbar/Apps/youtube/Youtube.jsx";
import TerminalApp from "../Taskbar/Apps/terminal/TerminalApp.jsx";
import { useWindows } from "../../context/WindowContext";
import MacWindow from "../Macwindow.jsx";

const APP_COMPONENTS = {
  Terminal: TerminalApp,
  Github: Github,
  Photos: Photos,
  Camera: Camera,
  Youtube: Youtube,
  Spotify: SpotifyApp,
  Pdf:PdfViewer
};


const Desktop = () => {
  const { windows } = useWindows();

  return (
    <div className="desktop">
      {Object.entries(windows).map(([id, win]) => {
        const App = APP_COMPONENTS[id];
        if (!App) return null;

        return (
          <MacWindow
            key={id}
            appId={id}
            title={id}
            bounds={win}
          >
            <App />
          </MacWindow>
        );
      })}
    </div>
  );
};

export default Desktop;
