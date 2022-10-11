import { useState } from "react"
import { useContext } from 'react';
import { noteContext } from '../providers/NoteProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Main(props) {

  const { addNote, name, classId, setClassId, setName, title, text, setTitle, setText, reset } = useContext(noteContext);

  return (
    <div className="app-main">
      <div className="container-p5">
        <select className="custom-select" onChange={(e) => {
          let selectedClass = e.target.value
          console.log(selectedClass)
          setName(selectedClass)
        }}>
          <option >Select class </option>
          <option >History</option>
          <option >Math</option>
          <option >Literature</option>
        </select>
      </div>
      <div className="app-main-note-edit">
        <form>
          <input type="text" id="title" autoFocus placeholder="Enter title here" value={title}
            onChange={(e) => { setTitle(e.target.value) }} required
          />
          <textarea id="body" placeholder="Write your note here..." value={text}
            onChange={(e) => { setText(e.target.value) }} required
          />
          <div className="my-btn">
            <button type="button" class="btn btn-outline-primary" onClick={() => {
              addNote(title, text, classId, name)
            }} //change class and semester
            >Add Note</button>
            <button type="button" class="btn btn-outline-danger" onClick={() => { reset() }}>Cancel</button>
          </div>
        </form>
      </div>
      <br></br>
    </div>
  )
}