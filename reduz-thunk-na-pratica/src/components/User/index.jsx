import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { addCommentThunk } from "../../store/user/thunks";
import { useState } from "react";

const User = () => {
  const [newComment, setNewComment] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const mapComments = user.comments.map((value, index) => {
    return (
      value && (
        <span className="comments" key={index}>
          {value}
        </span>
      )
    );
  });

  return (
    <>
      <input
        className="input"
        onChange={(event) => setNewComment(event.target.value)}
      />
      <button
        className="button"
        onClick={() => dispatch(addCommentThunk(newComment))}
      >
        adding
      </button>
      <h1 className="title">{user.name}</h1>
      <div className="divComments">{mapComments}</div>
    </>
  );
};

export default User;
