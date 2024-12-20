// Notes Page Instructions: try to give the notes more CSS styling to make it look like a notebook. You can add a background image, change the font, add padding, etc.
import React, {useState, useEffect} from "react";

const Notes = () => {

  const [notes, setNotes] = useState(() => {
    // Load notes from localStorage
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [noteText, setNoteText] = useState("");
  const [editingNote, setEditingNote] = useState(null);

  // Save notes to localStorage when they get updated
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleInputChange = (e) => {
    setNoteText(e.target.value);
  };

  const addNote = () => {
    if (noteText.trim() !== "") {
      setNotes([...notes, noteText]); // Add the new note to the notes array
      setNoteText("");
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index); // filter out the note at the given index
    setNotes(updatedNotes);
  };

  return (
    <div className="notes-container">
      <h2>Notes</h2>
      <b>Write all your notes here!!</b>
      <p><b>If you need to edit your notes, feel free to copy your old note, and then paste it into a new note with the edits you've made</b></p>
      <textarea
        placeholder="Write your notes here..."
        rows="10"
        cols="30"
        value={noteText}
        onChange={handleInputChange}
      ></textarea>
      <button className='add-button' onClick={addNote}>Add Note</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index}
              className="noteStyle">
            {note}
            <button className='delete-button' onClick={() => deleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;