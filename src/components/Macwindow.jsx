import { Rnd } from "react-rnd";
import { useState } from "react";
import "./macwindow.scss";
import { useWindows } from "../context/WindowContext.jsx";

const TITLEBAR_HEIGHT = 40;

const MacWindow = ({
  appId,
  title = "Mac Window",
  children,
}) => {
  const {
    windows,
    closeWindow,
    bringToFront,
    updateBounds,
  } = useWindows();

  const win = windows[appId];
  const [minimized, setMinimized] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  if (!win) return null;

  const toggleFullscreen = () => {
    if (!fullscreen) {
      updateBounds(appId, {
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setFullscreen(true);
    } else {
      updateBounds(appId, {
        x: win.x,
        y: win.y,
        width: win.width,
        height: win.height,
      });
      setFullscreen(false);
    }
  };

  return (
<Rnd
  bounds="parent"
  size={{ width: win.width, height: win.height }}
  position={{ x: win.x, y: win.y }}
  minWidth={win.minWidth}
  minHeight={win.minHeight + TITLEBAR_HEIGHT}
  dragHandleClassName="mac-titlebar"
  enableResizing={!fullscreen}
  style={{ zIndex: win.zIndex }}
  onDragStop={(e, d) =>
    updateBounds(appId, { x: d.x, y: d.y })
  }
  onResizeStop={(e, dir, ref, delta, pos) =>
    updateBounds(appId, {
      width: ref.offsetWidth,
      height: ref.offsetHeight,
      x: pos.x,
      y: pos.y,
    })
  }
>

      {/* REAL WINDOW CONTAINER */}
      <div onMouseDown={() => bringToFront(appId)} 
      className={`mac-window ${minimized ? "minimized" : ""}`}>
        
        {/* TITLEBAR */}
        <div className="mac-titlebar">
          <div className="mac-buttons">
            <div
              className="mac-btn close"
              onClick={() => closeWindow(appId)}
            />
            <div
              className="mac-btn minimize"
              onClick={() => setMinimized(v => !v)}
            />
            <div
              className="mac-btn zoom"
              onClick={() => {
                setMinimized(false);
                toggleFullscreen();
              }}
            />
          </div>

          <div className="mac-title">{title}</div>
        </div>

        {/* CONTENT */}
        {!minimized && (
          <div className="mac-content">
            {children}
          </div>
        )}
      </div>
    </Rnd>
  );
};

export default MacWindow;
