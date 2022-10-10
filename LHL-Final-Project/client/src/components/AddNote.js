import React from 'react';
import { useContext } from 'react';
// import { noteContext } from 'providers/NoteProvider';
import { noteContext } from '../providers/NoteProvider';
import './AddNotes.css'
import { Container } from "react-bootstrap";
import Main from "./Main";
import Sidebar from "./Sidebar";




export default function AddNote (){

  const { noteData} = useContext(noteContext);


  // const [noteData, setNoteData] = useState(undefined)
   //const [id, setId] = useState(1);  //if  a user is logged in, we will setId to the corresponding user id.
  // const[title, setTitle] = useState("")
  //   const[body, setBody] = useState("")
  // function getDataFromChild(x,y) {
  
  //   setTitle(title)
  //   setBody(body)
  // }


 
 // WE SHOULD PUSH THIS UP SO WE WILL ONLY HAVE ONE OF THIS
 const id = 1 // this will come from auth state later
  // useEffect(() => {
  //   loadNotes(id)
  //   //replace here by setnotedata funcion for dashboard 
  // }, [])

  // function changeState(data){
  //   //
  //    setNoteData(noteData.userNotes.unshift(data[0]))
  // }
  // function createNote(id) {

  //   fetch("/notes", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       title: title,
  //       body: body,
  //       user_id: id,
  //       class_id: 1,
  //       semester_id: 1
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8"
  //     }

  //   }).then(res => res.json())
  //     .then(data => console.log(data))
  //    // reset()
  // }
  return (
    <Container fluid>

    <div className="main-div">

      <Sidebar noteData={noteData} />
      <Main id={id} noteData={noteData}  />
    </div>
      
      
  
     </Container>
  )
}