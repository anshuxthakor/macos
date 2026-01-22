import Navbar from "./Navbar/Navbar.jsx";
import Desktop from "./Desktop/Desktop.jsx";
import Docs from "./Taskbar/Docs.jsx";
import "./screen.scss";

const Screen = () => {
  return (
    <main className="screen">
      <Navbar />
       <Desktop />
      <Docs />
    </main>
  );
};

export default Screen;
