import { useState } from "react"
import { useContext } from 'react';
import { noteContext } from '../providers/NoteProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Main(props) {

  const { addNote,title, text , setTitle, setText } = useContext(noteContext);

  const [name, setName] = useState("")
  const [classId, setClassId] = useState(null)

  //const {  courseName, classData, setClassStateAddingNotes } = useContext(classContext);

  // const [title, setTitle] = useState("")
  // const [text, setText] = useState("")

  // function reset() {
  //   setTitle("")
  //   setText("")
  // }
  function selectId(name) {
    if (name === "history") {

      return setClassId(1)

    }
    if (name === "math") {
      return setClassId(2)
    }
    if (name === "literature") {
      return setClassId(3)
    }

  }


  return (
    <div className="app-main">


      <div className="container-p5">
        <select className="custom-select" onChange={(e) => {
          let selectedClass = e.target.value
          console.log(selectedClass)
          setName(selectedClass);
         // selectId();
        }}>
          <option >Select class </option>
          <option >History</option>
          <option >Math</option>
          <option >Literature</option>

        </select>
        <p >class: {name}</p>
      </div>


      <div className="app-main-note-edit">
        <form>
          <input type="text" id="title" autoFocus placeholder="Enter title here" value={title}
            onChange={(e) => { setTitle(e.target.value) }} required
          />
          <textarea id="body" placeholder="Write your note here..." value={text}
            onChange={(e) => { setText(e.target.value) }} required
          />
          <button type="button" class="btn btn-primary" onClick={() => addNote(title, text, 2, name)} //change class and semester
          >Add note</button>
        </form>
      </div>

      <br></br>
      {/* <div className="app-main-note-preview">
        <h1 className="preview-title">TITLE</h1>
        <div className="markdown-preview">note preview</div>
      </div> */}
    </div>
  )
}