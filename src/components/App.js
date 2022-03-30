import video from "../data/video.js";
import CommentList from "./CommentList.js";
import LikeButtons from "./LikeButtons.js";
import Video from "./Video.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video video={video} />
      <LikeButtons likes={video.upvotes} dislikes={video.downvotes} />
      <CommentList comments={video.comments} />
    </div>
  );
}

export default App;
