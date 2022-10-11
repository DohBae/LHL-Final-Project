import { useState } from "react"
import { useContext } from 'react';
import { noteContext } from '../providers/NoteProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Main(props) {

  const { addNote,name, classId, setClassId, setName, title, text , setTitle, setText, reset } = useContext(noteContext);

 // const [name, setName] = useState("")
 // const [classId, setClassId] = useState(null)

  //const {  courseName, classData, setClassStateAddingNotes } = useContext(classContext);

  // const [title, setTitle] = useState("")
  // const [text, setText] = useState("")

  // function reset() {
  //   setTitle("")
  //   setText("")
  // }



  return (
    <div className="app-main">


      <div className="container-p5">
        <select className="custom-select" onChange={(e) => {
          let selectedClass = e.target.value
          console.log(selectedClass)
          setName(selectedClass)
          // selectId(name)
         //  console.log( selectId(name))
          // console.log(classId)
         // showName()
         // selectId();
        }}>
          <option >Select class </option>
          <option >History</option>
          <option >Math</option>
          <option >Literature</option>

        </select>
        {/* <p >class: {name}</p> */}
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
            addNote(title, text, classId, name)}} //change class and semester
          >Add Note</button>
         <button type="button" class="btn btn-outline-danger" onClick={() => {reset()}}>Cancel</button>
          </div>
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