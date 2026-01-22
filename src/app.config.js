import github from "./assets/svgs/github.svg";
import terminal from "./assets/svgs/terminal.svg";
import youtube from "./assets/svgs/youtube.svg";
import pdf from "./assets/svgs/pdf.svg";
import spotify from "./assets/svgs/spotify.svg";
import photos from "./assets/svgs/photos.svg";
import camera from "./assets/svgs/camera.svg";

const apps = [
  {
    id: "Terminal",
    name: "Terminal",
    icon: terminal,
    minWidth: 420,
    minHeight: 260,
  },
  {
    id: "Pdf",
    name: "PDF Viewer",
    icon: pdf,
    minWidth: 480,
    minHeight: 260,
  },
  {
    id: "Camera",
    name: "Camera",
    icon: camera,
    minWidth: 420,
    minHeight: 260,
  },
  {
    id: "Youtube",
    name: "YouTube",
    icon: youtube,
    minWidth: 420,
    minHeight: 260,
  },
  {
    id: "Photos",
    name: "Photos",
    icon: photos,
    minWidth: 420,
    minHeight: 260,
  },
  {
    id: "Spotify",
    name: "Spotify",
    icon: spotify,
    minWidth: 420,
    minHeight: 380,
  },
  {
    id: "Github",
    name: "GitHub",
    icon: github,
    minWidth: 420,
    minHeight: 260,
  },
];

export const DEFAULT_BOUNDS = {
  Terminal: { x: 120, y: 90 },
  Github:   { x: 600, y: 130 },
  Photos:   { x: 240, y: 170 },
  Camera:   { x: 350, y: 180 },
  Pdf:      { x: 200, y: 150 },
  Youtube:  { x: 460, y: 190 },
  Spotify:  { x: 800, y: 100 },
};


export default apps;
