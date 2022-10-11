import React from 'react';
import { useContext } from 'react';
import { noteContext } from '../providers/NoteProvider';
import './Notes.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { BsTrash } from 'react-icons/bs';
import '../App.css';
import './AddNotes.css'
import './ViewNote.css';


export default function ViewHistoryNotes() {

  const { allNotes, selectNoteIdToShow, favoritedNotes, editNoteView, isNoteIdSaved, removeFromSaved } = useContext(noteContext);

  const name = JSON.parse(localStorage.getItem('notifyUser')).firstname

  const noteListed = favoritedNotes.map((note, i) => (

    <div div className="card-container" >
      <Card border="dark" key={i} style={{ width: '18rem', height: '20rem' }} >
        <Card.Body>
          <div onClick={() => { selectNoteIdToShow(note.note_id); isNoteIdSaved(note.note_id) }}>
            <Card.Title className="text-center">{note.title}</Card.Title>
            <Card.Text >{note.body.substr(0, 175) + "....."}</Card.Text>
          </div>
        </Card.Body>
        <div class="fav">
          <small>Last modified: {note.publishdate}</small>
          <button onClick={() => removeFromSaved(note.note_id)} type="button" class="btn btn-outline-danger"><BsTrash size={20} /></button>
        </div>
      </Card>
    </div>
  ))

  return (
    <div>
      <h1 text align="center" className="page-title"> {name}'s Favorites</h1>
      <Container className="notes-layout">
        {noteListed}
      </Container>
    </div>
  );
}
