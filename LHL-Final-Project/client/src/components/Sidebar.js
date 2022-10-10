import { useEffect, useState } from "react"
import { useContext } from 'react';
import { noteContext } from '../providers/NoteProvider';

export default function Sidebar() {

  const { noteData, deleteNote } = useContext(noteContext);

  //const [noteId, setNoteId] = useState(null)

  // function deleteNote(noteId,userId) {
  //   //setNoteId(note.id)
    
  //   fetch(`/notes/delete/${noteId}`, {
  //     method: "POST"

  //   }).then(res => res.json())
  //     .then(data => {
  //       console.log("data:", data)
  //       setNoteDataForDashboard(data)
  //     })
  //   // reset()
 
  // }
  // function updateSidebar(userId) {
  //   fetch(`/notes/${userId}`).then(
  //     res => res.json())
  //     .then(data => setNoteDataForDashboard(data)) 
  //   }
const noteList = noteData.map((note, i) => {
 // console.log("note:",note)
  return (
  <div key ={i} className="app-sidebar-note">
    <div className="sidebar-note-title">
      <strong>{note.title}</strong>
      <button type="button" onClick={()=> deleteNote(note.id)}>Delete</button>
    </div>

    <p>{note.body.substr(0, 100) + "....."}</p>

    <small className="note-meta">Last modified {note.publishdate}</small>
  </div>


)})


  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button>Add</button>
      </div>
      <div className="app-sidebar-notes" >
      {noteList}
      </div>
    </div>
  )




}