import "./Post.css";
import {
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
  FaShareAlt,
  FaCommentAlt,
} from "react-icons/fa";

export function Post(props) {
  const {
    subName,
    subIcon,
    votes,
    title,
    postImg,
    numberOfComments,
    username,
    timePosted,
  } = props;

  return (
    <div className="post">
      <div className="sidebar">
        <div>
          <button className="upvote">
            <FaRegArrowAltCircleUp className="icon" />
          </button>
        </div>
        <div style={{ margin: "4px 0" }}>{votes}</div>
        <div>
          <button className="downvote">
            <FaRegArrowAltCircleDown className="icon" />
          </button>
        </div>
      </div>

      <div className="main-content">
        <div className="post-info">
          <img src={subIcon} className="icon" alt="sub" />
          <div>
            <a style={{ fontWeight: "700" }}>{subName}</a>
            <span style={{ margin: "0 4px" }}>•</span>
            <span className="grey-text">
              Posted by <a>u/{username}</a> {timePosted}
            </span>
          </div>
        </div>
        <div className="title">
          <h3>{title}</h3>
        </div>

        <div className="post-image">
          <img src={postImg} className="postImg" alt="post" />
        </div>

        <div className="misc grey-text">
          <a className="comments">
            <FaCommentAlt className="icon" />
            <span>{numberOfComments} Comments</span>
          </a>
          <a>
            <FaShareAlt className="icon" />
            <span>Share</span>
          </a>
        </div>
      </div>
    </div>
  );
}
