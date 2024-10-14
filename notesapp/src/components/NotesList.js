import Note from "./Note";
import AddNote from "./AddNote";
const NotesList = ({ notes, handelAddNote, handelDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handelDeleteNote={handelDeleteNote}
        />
      ))}
      <AddNote handelAddNote={handelAddNote} />
    </div>
  );
};
export default NotesList;
