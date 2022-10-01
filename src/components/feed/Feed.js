import { useEffect, useState } from "react";
import axios from "axios";
import "./Feed.css";
import { Card } from "../card/Card";

export function Feed() {
  const [posts, setPosts] = useState(null);
  const [lastID, setLastID] = useState("");
  const [limit, setLimit] = useState(15);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://www.reddit.com/r/popular.json",
      params: { limit: limit, after: lastID },
    }).then((res) => {
      setIsLoading(false);
      console.log(res);
      setPosts(res.data.data.children);
    });
  }, [limit]);

  // console.log(posts);
  return (
    <div className="w-full contents lg:w-xl lg:max-w-4xl text-white">
      {isLoading
        ? null
        : posts.map((post) => {
            const {
              name,
              subreddit_id,
              author,
              num_comments,
              permalink,
              url,
              score,
              subreddit_name_prefixed,
              title,
              created,
              is_video,
              media,
              post_hint,
              selftext,
            } = post.data;
            return (
              <Card
                key={name}
                subName={subreddit_name_prefixed}
                subIcon="https://styles.redditmedia.com/t5_2tf0e/styles/communityIcon_5hxci89b2wd31.jpeg?format=pjpg&s=4f5b848829e4071a176c631ac7275f6f8405bb28"
                votes={score}
                title={title}
                postImg={url}
                numberOfComments={num_comments}
                username={author}
                timePosted="1 hour ago"
                video={is_video}
                media={media?.reddit_video}
                post_hint={post_hint}
                selftext={selftext}
                post_link={permalink}
                created={created}
              />
            );
          })}
    </div>
  );
}
