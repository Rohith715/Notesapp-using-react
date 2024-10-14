import { MdDelete } from "react-icons/md";

const Note = ({ id, text, date, handelDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <button className="del">
          <MdDelete onClick={() => handelDeleteNote(id)} />
        </button>
      </div>
    </div>
  );
};
export default Note;
