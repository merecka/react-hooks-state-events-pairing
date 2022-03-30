import React from "react";

function Comment({user, comment}) {

    return (
        <div>
            <div className="comment">
                <h3>{user}</h3>
                <p>{comment}</p>
            </div>
        </div>
      );
}

export default Comment;
