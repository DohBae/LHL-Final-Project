import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsBookmarkHeart } from 'react-icons/bs';


// Create a Context
export const noteContext = createContext();

// Create a Component wrapper from Context.Provider
export default function NoteProvider(props) {


  const navigate = useNavigate()

  // Here is our Shared State Object
  const [noteData, setNoteData] = useState([]);
  const [allNotes, setAllNotes] = useState([]);
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [name, setName] = useState("")
  const [noteIdToShow, setNoteIdToShow] = useState(0)
  const [userInfo, setUserInfo] = useState(null)
  const [noteIdToEdit, setNoteIdToEdit] = useState(0)
  const [saved, setSaved] = useState("save to favorites")
  const [favoritedNotes, setFavoritedNotes] = useState([])
  const [noteIdSaved, setNoteIdSaved] = useState("save to favourites")
  const [buttonStatus, setButtonStatus] = useState(false)
  const [change, setChange] = useState("")
  // Here is our Shared State Object
  const [classId, setClassId] = useState()
  // const userId = JSON.parse(localStorage.getItem('notifyUser')).id; // this has to come from auth provider-useContext
  const userId = 1
  useEffect(() => {
    fetch(`/notes/${userId}`).then(
      res => res.json())
      .then(data => setNoteData(data.userNotes))
  }, [])

  useEffect(() => {
    fetch(`/favorites`).then(
      res => res.json())
      .then(data => setFavoritedNotes(data.favorites))
  }, [change])

  useEffect(() => {
    fetch(`/notes`).then(
      res => res.json())
      .then(data => setAllNotes(data.notes))
  }, [text])


  function reset() {
    setTitle("")
    setText("")
  }

  function addNote(title, text, classId, name) {


    let realId;
    console.log(name)
    if (name === "History") {
      realId = 1;
    }
    if (name === "Math") {
      realId = 2;
    }
    if (name === "Literature") {
      realId = 3;
    }
    console.log("REALID:", realId)
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

  function editNote(title, text, noteId) {
    isNoteIdSaved(noteId)
    const note = {
      title: title,
      body: text,
    }
    const body = JSON.stringify(note)

    fetch(`/notes/edit/${noteId}`, {
      method: "POST",
      body,
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }

    }).then(res => res.json())
      .then(note => {
        console.log(note)
        setNoteData([noteData])
        selectNoteIdToShow(note.id)
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
        setNoteData(noteData.filter((notes) => notes.id !== noteId)) // remove obj from array 
      })
  }

  function selectNoteIdToShow(id) {
    setNoteIdToShow(id)
    navigate("/viewNote")
  }

  function editNoteView(data) {
    setTitle(data.title)
    setText(data.body)
    setNoteIdToEdit(data.id)
    navigate('/edit')
  }

  function addNoteToFavorites(noteId) {
    fetch(`/favorites/${noteId}`, {
      method: "POST"

    }).then(res => res.json())
      .then(data => {
        //console.log("data:", data)
        console.log(data)
      })
    isNoteIdSaved(noteId)
    selectNoteIdToShow(noteId)


  }
  function removeFromSaved(noteId) {

    fetch(`/favorites/delete/${noteId}`, {
      method: "POST"

    }).then(res => res.json())
      .then(data => {
        //console.log("data:", data)
        setFavoritedNotes(favoritedNotes.filter((notes) => notes.note_id !== noteId)) // remove obj from array 
      })

  }

  function isNoteIdSaved(noteId) {
    for (let i of favoritedNotes) {
      if (i.note_id === noteId) {
        setNoteIdSaved(<BsBookmarkHeart size={25} />)
        setButtonStatus(true)
        return
      }
    }
    setNoteIdSaved(<BsBookmarkHeart size={25} />)
    setButtonStatus(false)
  }




  // This list can get long with a lot of functions.  Reducer may be a better choice
  const providerData = {
    noteData, buttonStatus, favoritedNotes, noteIdSaved, classId, userInfo, title,
    text, name, allNotes, noteIdToShow, noteIdToEdit, saved,change, setChange,  setSaved, editNoteView,
    editNote, setNoteIdToShow, setUserInfo, setNoteIdToEdit, setName, setTitle, setText, setAllNotes,
    addNote, deleteNote, isNoteIdSaved, setClassId, selectNoteIdToShow, removeFromSaved, reset, addNoteToFavorites
  };

  // We can now use this as a component to wrap anything 
  // that needs our state
  return (
    <noteContext.Provider value={providerData}>
      {props.children}
    </noteContext.Provider>
  );
};