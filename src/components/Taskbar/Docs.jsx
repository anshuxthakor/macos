import "./docs.scss";
import apps from "../../app.config.js";
import { useWindows } from "../../context/WindowContext.jsx";
import { DEFAULT_BOUNDS } from "../../app.config.js";

const Docs = () => {
  const { openWindow } = useWindows();

  return (
    <div className="taskbar">
      <div className="logos">
        {apps.map((app) => (
          <button
            key={app.id}
            className="logo-btn"
            onClick={() =>
              openWindow(app.id, {
                ...DEFAULT_BOUNDS[app.id],
                minWidth: app.minWidth,
                minHeight: app.minHeight,
              })
            }
          >
            <img src={app.icon} alt={app.name} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Docs;
