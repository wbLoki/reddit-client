import "./Card.css";
import {
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
  FaShareAlt,
  FaCommentAlt,
} from "react-icons/fa";
import Media from "./Media";
import PostDateCalculator from "../../features/PostDateCalculator";
import RoundingNumbers from "../../features/RoundingNumbers";

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

  const timePosted = PostDateCalculator(created);
  const goTo = () => {
    window.open(`https://reddit.com${post_link}`);
  };
  return (
    <div
      className="max-w-full mb-1 text-base z-3 cursor-pointer overflow-hidden md:mb-2 md:rounded-lg md:border
    md:border-transparent md:max-w-2xl md:hover:border-[#818384] bg-[#1A1A1B]"
    >
      <div className="pt-2 w-screen max-w-full">
        {/* POST INFORMATIONS */}
        <div className="text-xs flex items-center m-2 mt-0 md:items-start">
          <img src={subIcon} className="w-6 rounded-xl mr-1" alt="sub" />
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
        {/* COMMENTS AND SHARE */}
        <div className="flex flex-row items-center text-grey text-sm h-10">
          <div className="flex">
            <button className="upvote misc">
              <FaRegArrowAltCircleUp className="icon" />
            </button>
            <span className="mx-1">{RoundingNumbers(votes)}</span>
            <button className="downvote misc">
              <FaRegArrowAltCircleDown className="icon" />
            </button>
          </div>
          <div className="flex px-2">
            <div className="p-2 hover:bg-black" onClick={goTo}>
              <button href="#" className="misc">
                <FaCommentAlt className="icon" />
                <span className="mx-2">
                  {RoundingNumbers(numberOfComments)} Comments
                </span>
              </button>
            </div>
            <div className="p-2 hover:bg-black">
              <button href="#" className="misc">
                <FaShareAlt className="icon" />
                <span className="mx-2">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
