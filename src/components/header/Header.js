import logo from "./reddit-dark.png";
import "./Header.css";

export function Header() {
  return (
    <div className="header">
      <img src={logo} className="reddit-logo" alt="logo" />
      <p className="logo-text">DarkReddit</p>
    </div>
  );
}
