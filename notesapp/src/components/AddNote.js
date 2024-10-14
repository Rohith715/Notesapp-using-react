import { useState } from "react";
const AddNote = ({ handelAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;
  const handelChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };
  const handelSaveClick = () => {
    if (noteText.trim().length > 0) {
      handelAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a new note.."
        value={noteText}
        onChange={handelChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} characters remaining</small>
        <button className="save" onClick={handelSaveClick}>
          save
        </button>
      </div>
    </div>
  );
};
export default AddNote;
