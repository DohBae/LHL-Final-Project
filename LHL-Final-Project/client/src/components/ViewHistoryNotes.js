import React from 'react';
import { useContext } from 'react';
// import { noteContext } from 'providers/NoteProvider';
import { noteContext } from '../providers/NoteProvider';
import './Notes.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import '../App.css';
import './AddNotes.css'

import './ViewNote.css';



// export default function HistoryNotes() {

//   const {allNotes, setAllNotes} = useContext(noteContext);

//   const noteList = allNotes.filter((note) => note.name ==="history")

// }




export default function ViewHistoryNotes() {

  const { allNotes, selectNoteIdToShow , isNoteIdSaved} = useContext(noteContext);

  const noteList = allNotes.filter((note) => note.class_id === 1)


  const noteListed = noteList.map((note, i) => (
 


     <div onClick={() => {selectNoteIdToShow(note.id)
      isNoteIdSaved(note.id)}}>       
       <div div className="card-container" >
          <Card border="dark" key={i} style={{ width: '18rem', height: '20rem' }} >
            <Card.Body>
              <Card.Title className="text-center">{note.title}</Card.Title>
              {/* <div  class=" text-right">
              <button type="button" class="btn btn-outline-primary">Edit</button>
              <button type="button" class="btn btn-outline-danger">Delete</button>
            </div> */}
              <Card.Text >{note.body.substr(0, 200) + "....."}</Card.Text>
              <div align="right">
            <small align ="right"className="note-meta">Last modified: {note.publishdate}</small>
            <br></br>
            <small align ="right"className="note-meta">posted by user:{note.user_id}</small>
              </div>

            </Card.Body>
          </Card>
        </div>
      </div>
  ))


  return (
          <div>
            <h1 text align="center"> History notes</h1>
            <Container className="notes-layout">
            {noteListed}
            </Container>
          </div>

  );
}
