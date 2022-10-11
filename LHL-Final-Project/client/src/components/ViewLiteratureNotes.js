import React from 'react';
import { useContext } from 'react';
// import { noteContext } from 'providers/NoteProvider';
import { noteContext } from '../providers/NoteProvider';
import './Notes.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import '../App.css';
import './ViewNote.css';
//import { Navigate } from 'react-router-dom';


// export default function HistoryNotes() {

//   const {allNotes, setAllNotes} = useContext(noteContext);

//   const noteList = allNotes.filter((note) => note.name ==="history")

// }




export default function ViewLiteratureNotes() {

  const { allNotes, selectNoteIdToShow } = useContext(noteContext);

  const noteList = allNotes.filter((note) => note.class_id === 3)
  //console.log(noteList)

  const noteListed = noteList.map((note, i) => (

    <div onClick={() => selectNoteIdToShow(note.id)}>
      < div className="card-container" >
        <Card border="dark" key={i} style={{ width: '18rem', height: '20rem' }} >
          <Card.Body>
            <Card.Title className="text-center">{note.title}</Card.Title>
            <Card.Text >{note.body.substr(0, 200) + "....."}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  ))


  return (
    <div>
      <h1 text align="center"> Literature notes</h1>
      <Container className="notes-layout">
        {noteListed}
      </Container>
    </div>
  );
}
