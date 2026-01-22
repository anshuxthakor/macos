import { useState, useEffect } from "react";
import apple from "../../assets/svgs/apple.svg";
import "./navbar.scss";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    }).replace(',', '');
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <nav className="navbar">
      <div className="left">
        <img className="apple" src={apple} alt="" />
        <div className="text">
          <span>Finder</span>
          <span>Edit</span>
          <span>View</span>
          <span>Window</span>
          <span>Help</span>
        </div>
        <h1 className="user">MacOS</h1>
      </div>
      <div className="right">
        <span>{formatDate(currentTime)}</span>
        <span>{formatTime(currentTime)}</span>
      </div>
    </nav>
  );
};

export default Navbar;
