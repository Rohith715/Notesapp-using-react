import NotesList from "./components/NotesList";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { nanoid } from "nanoid";
import Login from "./components/Login";
const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first note",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "this is my second note",
      date: "31/05/2004",
    },
    {
      id: nanoid(),
      text: "this is my third note",
      date: "31/05/2004",
    },
    {
      id: nanoid(),
      text: "this is my fourth note",
      date: "31/05/2004",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  };
  return (
    <Routes>
      <Route
        path="/notesapp"
        element={
          <>
            <div className="container">
              <NotesList
                notes={notes}
                handelAddNote={addNote}
                handelDeleteNote={deleteNote}
              />
            </div>
          </>
        }
      />
      <Route path="/" element={<Login></Login>}></Route>
    </Routes>
  );
};
export default App;
