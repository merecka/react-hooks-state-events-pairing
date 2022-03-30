import React, {useState} from "react";

function LikeButtons({likes, dislikes}) {
    const [newLikes, setLikes] = useState(likes);
    const [newDislikes, setDislikes] = useState(dislikes);

    function increaseLikes() {
        let addLike = newLikes + 1;
        setLikes(addLike);
    }

    function decreaseLikes() {
        let addDislike = newDislikes + 1;
        setDislikes(addDislike);
    }

    return (
        <div>
            <div className="likeButton">
                <button onClick={increaseLikes}>{newLikes} Like</button>
                <button onClick={decreaseLikes}>{newDislikes} Dislike</button>
            </div>
            <div className="dislikeButton">
  
            </div>
        </div>
      );
}

export default LikeButtons;
