import { useDispatch } from "react-redux";
import { addCommentThunk } from "../../store/user/thunks";
import { useState } from "react";

const User = () => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <input onChange={(event) => setComment(event.target.value)} />
      <button onClick={() => dispatch(addCommentThunk(comment))}>
        new comment
      </button>
      <p></p>
    </>
  );
};

export default User;
