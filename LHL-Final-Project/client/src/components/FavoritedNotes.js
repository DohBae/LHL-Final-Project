import React from 'react';
import { useContext } from 'react';
// import { noteContext } from 'providers/NoteProvider';
import { noteContext } from '../providers/NoteProvider';
import './Notes.css'
import Card from 'react-bootstrap/Card';
import { BsTrash } from 'react-icons/bs';

import '../App.css';



// export default function HistoryNotes() {

//   const {allNotes, setAllNotes} = useContext(noteContext);

//   const noteList = allNotes.filter((note) => note.name ==="history")

// }




export default function ViewHistoryNotes() {

  const { allNotes, selectNoteIdToShow, favoritedNotes, editNoteView, isNoteIdSaved, removeFromSaved} = useContext(noteContext);

 // const noteList = favoritedNotes.filter((note) => note.class_id === 1)


  const noteListed = favoritedNotes.map((note, i) => (

    <ul>
        <div div className="card-container" >
          <Card border="dark" key={i} style={{ width: '80rem' }} >
            <Card.Body>
      <div onClick={() => {selectNoteIdToShow(note.note_id); isNoteIdSaved(note.note_id)}}>
              <Card.Title className="text-center">{note.title}</Card.Title>
              {/* <div  class=" text-right">
              <button type="button" class="btn btn-outline-primary">Edit</button>
              <button type="button" class="btn btn-outline-danger">Delete</button>
            </div> */}
              <Card.Text >{note.body.substr(0, 300) + "....."}</Card.Text>
      </div>
            </Card.Body>
              <div class=" text-right">
                <button onClick={()=> removeFromSaved(note.note_id)} type="button" class="btn btn-outline-danger"><BsTrash size={20} /></button>
              </div>
          </Card>
        </div>
    </ul>
  ))


  return (
    <div align="center">
      <h1 text align="center"> Saved notes</h1>

      {noteListed}

    </div>
  );
}
