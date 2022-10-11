import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { noteContext } from '../providers/NoteProvider';
import './Notes.css'
import Card from 'react-bootstrap/Card';
import { BsTrash } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';

export default function Notes(props) {
  const navigate = useNavigate()

  //use localStorage data to auto populate
  const id = JSON.parse(localStorage.getItem('notifyUser')).id
  const name = JSON.parse(localStorage.getItem('notifyUser')).firstname

  const { noteData, selectNoteIdToShow, deleteNote, editNoteView, isNoteIdSaved } = useContext(noteContext);

  const noteList = noteData.map((note, i) => (
    <ul>
      <div className="card-container" >
        <Card key={i} style={{ width: '80rem' }} class="border-0" >
          <Card.Body>
            <div onClick={() => {
              selectNoteIdToShow(note.id);
              isNoteIdSaved(note.id)
            }}>
              <Card.Title className="text-center">{note.title}</Card.Title>
              <Card.Text >{note.body.substr(0, 300) + "....."}</Card.Text>
            </div>
          </Card.Body>
          <Card.Footer>
            <div className='dash-div'>
              <small align="right" className="note-meta">Last modified: {note.publishdate}</small>
              <div class=" text-right">
                <button onClick={() => editNoteView(note)} type="button" class="btn btn-outline-primary"> <BiEdit size={25} /></button>
                <button onClick={() => deleteNote(note.id)} type="button" class="btn btn-outline-danger"><BsTrash size={20} /></button>
              </div>
            </div>
          </Card.Footer>
        </Card>
      </div>
    </ul>
  ))

  return (
    <div>
      <h1 text align="center" className="page-title"> {name}'s Notes</h1>
      {noteList}
    </div>
  )
}