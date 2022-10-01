import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Media(props) {
  const { url, media, post_hint, selftext } = props;
  switch (post_hint) {
    case "image":
      return <img src={url} alt="sub" />;
    case "hosted:video":
      return (
        <div className="w-full">
          <video
            src={media.fallback_url}
            controls
            type="application/vnd.apple.mpegURL"
            className="max-h-[600px] m-auto"
          ></video>
        </div>
      );
    case "link":
      return (
        <div className="flex justify-evenlyn mx-2 my-1">
          <a className="text-xs text-left mr-6 text-sky-400 flex">
            <p className="underline truncate max-w-xs">{url}</p>
            <FaExternalLinkAlt />
          </a>
          <div> </div>
        </div>
      );
    default:
      return <p className="m-2 md:mx-4 text-left">{selftext}</p>;
  }
}
