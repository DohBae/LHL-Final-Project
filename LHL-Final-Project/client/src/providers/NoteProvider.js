import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


// Create a Context
export const noteContext = createContext();

// Create a Component wrapper from Context.Provider
export default function NoteProvider(props) {


  const navigate = useNavigate()
 
  // Here is our Shared State Object
  const [noteData, setNoteData] = useState([]);
  const [allNotes, setAllNotes] = useState([]);
  const [ title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [name, setName] = useState("")
  const [noteIdToShow, setNoteIdToShow] = useState(0)
  const [userInfo, setUserInfo] = useState(null)

  // Here is our Shared State Object
  const [classId, setClassId] = useState()
  // const userId = JSON.parse(localStorage.getItem('notifyUser')).id; // this has to come from auth provider-useContext
const userId = 3
  useEffect(() => {
    fetch(`/notes/${userId}`).then(
      res => res.json())
      .then(data => setNoteData(data.userNotes))
  }, [])

  useEffect(() => {
    fetch(`/notes`).then(
      res => res.json())
      .then(data => setAllNotes(data.notes))
  }, [])


  // useEffect(() => {
  //   fetch(`/notes/classes`).then(
  //     res => res.json())
  //     .then(data => setCourses(data.classes))
  // }, [])
  // Functions to change  the counter state item

  function reset() {
    setTitle("")
    setText("")
  }

  function addNote(title, text, classId, name) {

   
    let realId;
    console.log(name)
    if(name === "History") {
      realId = 1;
    }
    if(name === "Math") {
      realId = 2;
    }
   if (name === "Literature") {
     realId = 3;
   }
    console.log("REALID:",realId)
    const note = {
      title: title,
      body: text,
      user_id: userId,
      class_id: realId,
      semester_id: 1
    }
    const body = JSON.stringify(note)

    fetch("/notes", {
      method: "POST",
      body,
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }

    }).then(res => res.json())
      .then(note => {
        console.log(note)
        setNoteData([note, ...noteData])
        //setNoteData([...noteData, note])
      })
      reset()
  }

  function deleteNote(noteId) {
    //setNoteId(note.id)

    fetch(`/notes/delete/${noteId}`, {
      method: "POST"

    }).then(res => res.json())
      .then(data => {
        //console.log("data:", data)
        setNoteData(noteData.filter((notes)=> notes.id !== noteId)) // remove obj from array 
      })
  }

  function selectNoteIdToShow(id) {
    setNoteIdToShow(id)
    navigate("/viewNote")
  }

  // function setCourseToAdd(name) {
  //   //setCourseName(name)

  //   if (name === "history") {
  //     setClassId(1)
     
      
  //   }
  //   if (name === "math") {
  //     setClassId(2)
  //   }
  //   else {
  //     setClassId(3)
  //   }
  //  // console.log(courseName)
  //  console.log(name)
  //   console.log(classId)
  // }




  // This list can get long with a lot of functions.  Reducer may be a better choice
  const providerData = { noteData, classId, userInfo, setUserInfo, title, text, name, allNotes, noteIdToShow,setNoteIdToShow,
     setName, setTitle, setText, setAllNotes,  addNote, deleteNote,  setClassId, selectNoteIdToShow};

  // We can now use this as a component to wrap anything 
  // that needs our state
  return (
    <noteContext.Provider value={providerData}>
      {props.children}
    </noteContext.Provider>
  );
};