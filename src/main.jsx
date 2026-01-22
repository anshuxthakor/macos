import { createRoot } from "react-dom/client";
import { WindowProvider } from "./context/WindowContext.jsx";
import "./index.scss";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <WindowProvider>
        <App />
    </WindowProvider>,
);
