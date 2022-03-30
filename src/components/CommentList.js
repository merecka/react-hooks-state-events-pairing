import React, {useState} from "react";
import Comment from "./Comment";

function CommentList({comments}) {
    const [isHidden, setIsHidden] = useState(false);

    function toggleComments() {
        setIsHidden(!isHidden);
    }

	return (
        <div className="commentlist">
            <button onClick={toggleComments}>{isHidden? 'Show Comments' : 'Hide Comments'}</button>
            <div className={isHidden? 'hidden' : undefined}>
                <hr></hr>
                <h2>{comments.length} Comments</h2>
                {comments.map((comment) => {
                return <Comment key={comment.id} user={comment.user} comment={comment.comment} />
                })}
            </div>
        </div>
	);
}

export default CommentList;
