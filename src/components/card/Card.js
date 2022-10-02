import "./Card.css";
import { TbArrowBigTop, TbArrowBigDown, TbUpload } from "react-icons/tb";
import { VscComment } from "react-icons/vsc";
import Media from "./Media";
import { useState, useEffect } from "react";
import axios from "axios";
import PostDateCalculator from "../../features/PostDateCalculator";
import RoundingNumbers from "../../features/RoundingNumbers";
import RenderSubIcon from "../../features/RenderSubIcon";

export function Card(props) {
  const {
    subName,
    subIcon,
    votes,
    title,
    postImg,
    numberOfComments,
    username,
    media,
    post_hint,
    selftext,
    post_link,
    created,
  } = props;

  const [data, setData] = useState(null);
  const [icon, setIcon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // GET SUBREDDIT ICON
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://www.reddit.com/${subName}/about.json`,
    }).then((res) => {
      // console.log(res.data.data);
      const dbIcon = res.data.data.community_icon;
      setIcon(dbIcon.split("?")[0]);
      icon == "" && console.log("empty");
      // setIsLoading(false);
    });
  }, []);

  const timePosted = PostDateCalculator(created);
  const goTo = () => {
    window.open(`https://reddit.com${post_link}`);
  };
  return (
    !isLoading && (
      <div
        className="max-w-full mb-1 text-base z-3 cursor-pointer overflow-hidden md:mb-2 md:rounded-lg md:border
    md:border-transparent md:max-w-2xl md:hover:border-[#818384] bg-[#1A1A1B]"
      >
        <div className="pt-2 w-screen max-w-full">
          {/* POST INFORMATIONS */}
          <div className="text-xs flex items-center m-2 mt-0">
            <div>{RenderSubIcon(icon)}</div>
            <div className="grid text-left md:flex">
              <span href="#" className="font-bold hover:underline">
                {subName}
              </span>
              <span className="hidden md:mx-2 md:block">•</span>
              <span className="text-grey">
                Posted by <a className="hover:underline">u/{username}</a>{" "}
                {timePosted} ago.
              </span>
            </div>
          </div>
          {/* TITLE OF POST */}
          <div
            className="m-2 md:mx-4 text-xl font-semibold text-left"
            onClick={goTo}
          >
            <p>{title}</p>
          </div>
          {/* POST IMAGE/ VIDEO */}
          <div href={post_link} onClick={goTo}>
            <Media
              url={postImg}
              media={media}
              post_hint={post_hint}
              selftext={selftext}
            />
          </div>
          {/* VOTE COUNT */}
          <div className="flex flex-row items-center text-grey text-xs h-10">
            <div className="flex">
              <button className="upvote misc">
                <TbArrowBigTop className="icon" />
              </button>
              <span className="mx-1">{RoundingNumbers(votes)}</span>
              <button className="downvote misc">
                <TbArrowBigDown className="icon" />
              </button>
            </div>
            {/* COMMENTS AND SHARE */}
            <div className="flex px-2">
              <div className="p-2 hover:bg-black" onClick={goTo}>
                <button href="#" className="misc">
                  <VscComment className="icon" />
                  <span className="mx-2">
                    {RoundingNumbers(numberOfComments)} Comments
                  </span>
                </button>
              </div>
              <div className="p-2 hover:bg-black">
                <button href="#" className="misc">
                  <TbUpload className="icon" />
                  <span className="mx-2">Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
