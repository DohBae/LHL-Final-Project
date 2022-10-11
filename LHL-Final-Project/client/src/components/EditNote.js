import { useState } from "react"
import { useContext } from 'react';
import { noteContext } from '../providers/NoteProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export default function Main(props) {

  const { noteIdToEdit, title, text, setTitle, setText, editNote, reset } = useContext(noteContext);
  const navigate = useNavigate()

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <h3> Edit your note ...</h3>
        <br></br>
        <form>
          <input type="text" id="title" autoFocus placeholder="Enter title here" value={title}
            onChange={(e) => { setTitle(e.target.value) }} required
          />
          <textarea id="body" placeholder="Write your note here..." value={text}
            onChange={(e) => { setText(e.target.value) }} required
          />
          <div className="ed-div">
            <button type="button" class="btn btn-primary" onClick={() => { editNote(title, text, noteIdToEdit) }} >Save change</button>
            <button type="button" class="btn btn-outline-danger" onClick={() => { reset(); navigate('/dashboard') }}>Cancel</button>
          </div>
        </form>
      </div>
      <br></br>
    </div>
  )
}