import React from 'react';
import { useContext } from 'react';
import { noteContext } from '../providers/NoteProvider';
import './Notes.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import '../App.css';
import './AddNotes.css'
import './ViewNote.css';


export default function ViewHistoryNotes() {

  const { allNotes, selectNoteIdToShow, isNoteIdSaved } = useContext(noteContext);

  const noteList = allNotes.filter((note) => note.class_id === 1)

  const noteListed = noteList.map((note, i) => (

    <div onClick={() => {
      selectNoteIdToShow(note.id)
      isNoteIdSaved(note.id)
    }}>
      <div div className="card-container" >
        <Card border="dark" key={i} style={{ width: '18rem', height: '20rem' }} >
          <Card.Body>
            <Card.Title className="text-center">{note.title}</Card.Title>
            <Card.Text >{note.body.substr(0, 175) + "....."}</Card.Text>
              <div className="posted-by">
              <small align="right" className="note-meta">Last modified: {note.publishdate}</small>
              </div>
          </Card.Body>
          <Card.Footer>
            <div align="left">
              <br></br>
              <small align="left" className="note-meta">posted by user:{note.user_id}</small>
            </div>
          </Card.Footer>
        </Card>
      </div>
    </div>
  ))

  return (
    <div>
      <h1 text align="center" className="page-title"> History Notes</h1>
      <Container className="notes-layout">
        {noteListed}
      </Container>
    </div>
  );
}
