import logo from "./reddit-dark.png";
import "./Header.css";

export function Header() {
  return (
    <div className="header justify-between px-2 pb-2 sticky top-0 md:justify-around">
      <p className="text-[#FF4C29] font-bold">DarkReddit</p>
      <img src={logo} className="h-8" alt="logo" />
    </div>
  );
}
