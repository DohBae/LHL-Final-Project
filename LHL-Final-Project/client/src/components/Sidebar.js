import { useEffect, useState } from "react"
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { noteContext } from '../providers/NoteProvider';
import { BsTrash } from 'react-icons/bs';

export default function Sidebar() {

  const navigate = useNavigate()

  const { noteData, deleteNote } = useContext(noteContext);
  const noteList = noteData.map((note, i) => {
    // console.log("note:",note)
    return (
      <div key={i} className="app-sidebar-note">
        <div className="sidebar-note-title">
          <strong>{note.title}</strong>
        </div>

        <p>{note.body.substr(0, 100) + "....."}</p>

        <small className="note-meta">Last modified {note.publishdate}</small>
        <div align="right">
          <button type="button" onClick={() => deleteNote(note.id)}><BsTrash size={20} /></button>
        </div>
      </div>


    )
  })

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
      </div>
      <div className="app-sidebar-notes" >
        {noteList}
      </div>
    </div>
  )




}