import React from 'react';
import { useContext } from 'react';
// import { noteContext } from 'providers/NoteProvider';
import { noteContext } from '../providers/NoteProvider';
import './Notes.css'
import Card from 'react-bootstrap/Card';
import '../App.css';



// export default function HistoryNotes() {

//   const {allNotes, setAllNotes} = useContext(noteContext);

//   const noteList = allNotes.filter((note) => note.name ==="history")

// }




export default function ViewHistoryNotes() {

  const { allNotes, selectNoteIdToShow } = useContext(noteContext);

  const noteList = allNotes.filter((note) => note.class_id === 1)


  const noteListed = noteList.map((note, i) => (

    <ul>
      <div onClick={() => selectNoteIdToShow(note.id)}>
        <div div className="card-container" >
          <Card border="dark" key={i} style={{ width: '80rem' }} >
            <Card.Body>
              <Card.Title className="text-center">{note.title}</Card.Title>
              {/* <div  class=" text-right">
              <button type="button" class="btn btn-outline-primary">Edit</button>
              <button type="button" class="btn btn-outline-danger">Delete</button>
            </div> */}
              <Card.Text >{note.body.substr(0, 300) + "....."}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </ul>
  ))


  return (
    <div align="center">
      <h1 text align="center"> History notes</h1>

      {noteListed}

    </div>
  );
}
