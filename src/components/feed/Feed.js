import "./Feed.css";
import { Post } from "../post/Post";

export function Feed() {
  return (
    <div className="feed">
      <Post
        subName="r/LeagueOfMemes"
        subIcon="https://styles.redditmedia.com/t5_2tf0e/styles/communityIcon_5hxci89b2wd31.jpeg?format=pjpg&s=4f5b848829e4071a176c631ac7275f6f8405bb28"
        votes="24K"
        title="The hunt is on"
        postImg="https://i.redd.it/edhapxyet6q91.png"
        numberOfComments="15"
        username="LuiZ123GM"
        timePosted="1 hour ago"
      />
    </div>
  );
}
