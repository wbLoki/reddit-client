import subLogo from "../components/card/subreddit.png";

export default function RenderSubIcon(icon) {
  switch (icon) {
    case "":
      return (
        <img src={subLogo} className="w-6 h-6 rounded-xl mr-1" alt="sub icon" />
      );
    default:
      return (
        <img src={icon} className="w-6 h-6 rounded-xl mr-1" alt="sub icon" />
      );
  }
}
