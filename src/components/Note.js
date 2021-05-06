import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
      <button className="button1">
        <ThumbDownAltIcon/>
      </button>
      <button className="button1">
        <ThumbUpAltIcon/>
      </button>
    </div>
  );
}

export default Note;
