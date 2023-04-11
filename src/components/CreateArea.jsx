import React, { useState } from "react";
import Add from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    if (!note.title || !note.content) {
      return;
    }

    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setClick(false);
    event.preventDefault();
  }

  const [click, setClick] = useState(false);

  return (
    <>
      <form onSubmit={submitNote} className="create-note">
        {click && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          required
        />
        }
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={click ? "3" : "1"}
          required
          onClick={() => setClick(true)}
        />
        <Zoom in={click}>
          <Fab type="submit">
            <Add />
          </Fab>
        </Zoom>
      </form>
    </>
  );
}

export default CreateArea;
