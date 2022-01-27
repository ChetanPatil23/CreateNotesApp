import * as React from "react";
import { Note } from "../models/note.model";
import Notes from "./Notes";

interface INotesListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList: React.FunctionComponent<INotesListProps> = ({
  notes,
  setNotes,
}) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => {
      return <Notes key={note.id} note={note} handleDelete={handleDelete} />;
    });
  };
  return (
    <>
      <h2 className="mt-3" style={{ textAlign: "center" }}>
        NotesList
      </h2>

      {notes.length === 0 ? (
        <div style={{ borderBottom: "1px solid red", textAlign: "center" }}>
          <h5>Please create notes to display</h5>
        </div>
      ) : (
        <div>{renderNotes()}</div>
      )}
    </>
  );
};

export default NotesList;
