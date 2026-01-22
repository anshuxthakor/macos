import { createContext, useContext, useRef, useState } from "react";

const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const zCounter = useRef(100);
  const [windows, setWindows] = useState({});

  const openWindow = (id, defaults = {}) => {
    setWindows((prev) => {
      // 🔹 If already open → just bring to front
      if (prev[id]) {
        return {
          ...prev,
          [id]: {
            ...prev[id],
            zIndex: ++zCounter.current,
          },
        };
      }

      // 🔹 Open new window with defaults
      return {
        ...prev,
        [id]: {
          open: true,

          // position
          x: defaults.x ?? 120,
          y: defaults.y ?? 120,

          // size (never smaller than min)
          width: defaults.width ?? defaults.minWidth ?? 420,
          height: defaults.height ?? defaults.minHeight ?? 260,

          // locked minimum size
          minWidth: defaults.minWidth ?? 300,
          minHeight: defaults.minHeight ?? 200,

          // stacking
          zIndex: ++zCounter.current,
        },
      };
    });
  };

  const closeWindow = (id) => {
    setWindows((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const bringToFront = (id) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        zIndex: ++zCounter.current,
      },
    }));
  };

  const updateBounds = (id, bounds) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        ...bounds,
      },
    }));
  };

  return (
    <WindowContext.Provider
      value={{
        windows,
        openWindow,
        closeWindow,
        bringToFront,
        updateBounds,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};

export const useWindows = () => useContext(WindowContext);
