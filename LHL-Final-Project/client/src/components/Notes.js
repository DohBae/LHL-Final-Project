import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
// import { noteContext } from 'providers/NoteProvider';
import { noteContext } from '../providers/NoteProvider';
import './Notes.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BsTrash } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import {BiEdit} from 'react-icons/bi';

export default function Notes(props) {
  const navigate = useNavigate()

  //hard-coded for now
  // const id = 1;
//   useEffect(() => {
//     loadNotes(id)
//  //pass a function here that sets note data
//   }, [])

//const [noteData, setNoteData] = useState(undefined)
  //const [id, setId] = useState(3)  if  a user is logged in, we will setId to the corresponding user id.


  //use localStorage data to auto populate
  const id = JSON.parse(localStorage.getItem('notifyUser')).id
  const name = JSON.parse(localStorage.getItem('notifyUser')).firstname
  // console.log("ID: ", id)
  // const id = 3;
  // useEffect(() => {
  //   fetch(`/notes`).then(
  //     res => res.json())
  //     .then(data => setNoteData(data))
  // }, [])

  const { noteData, selectNoteIdToShow, deleteNote, editNoteView, isNoteIdSaved } = useContext(noteContext);

  const noteList = noteData.map((note, i) => (


    <ul>
        <div className="card-container" >
        <Card key={i} style={{ width: '80rem' }} class="border-0" >

            <Card.Body>
           <div onClick={() =>{ selectNoteIdToShow(note.id);
          isNoteIdSaved(note.id)}}>
              <Card.Title className="text-center">{note.title}</Card.Title>
              <Card.Text >{note.body.substr(0, 300) + "....."}</Card.Text>
            </div>
            </Card.Body>
            <Card.Footer>

            <div className='dash-div'>
             <small align ="right"className="note-meta">Last modified: {note.publishdate}</small>
                <div class=" text-right">
                <button onClick={()=> editNoteView(note)} type="button" class="btn btn-outline-primary"> <BiEdit size={25}/></button>
                <button onClick={()=> deleteNote(note.id)} type="button" class="btn btn-outline-danger"><BsTrash size={20} /></button>
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
  )}

//   return (
//     <div>
//       <h1 text align= "center"> Your notes</h1>
      
//         {noteList}
// </div>
// )}

//     { <div onClick={() => alert("Hello from here")}>
//       {noteData ? (noteData.notes.map((note, i) => (
//         <ul>
//               HEAD
//           <div className= "card-container" >
//               <Card key={i} style={{ width: '80rem' }}>
//               <Card.Body>
//                 <Card.Title className="text-center">{note.title}</Card.Title>
//                 <div  class=" text-right">
//                   { <button type="button" class="btn btn-outline-primary">Edit</button> }
//                    <button type="button" class="btn btn-outline-danger"><BsTrash size={20} /></button> </div>
                
//               </Card.Body>
//             </Card>
//            </div>

    
//           </ul>
//       ))
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// } }
  // const { noteData, selectNoteIdToShow, deleteNote } = useContext(noteContext);

  // const noteList = noteData.map((note, i) => (


  //   <ul>
  //       <div className="card-container" >
  //         <Card border="dark" key={i} style={{ width: '80rem' }} >
  //     <div onClick={() => selectNoteIdToShow(note.id)}>
  //           <Card.Body>
  //             <Card.Title className="text-center">{note.title}</Card.Title>
  //             <Card.Text >{note.body.substr(0, 300) + "....."}</Card.Text>
  //           </Card.Body>
  //           </div>
  //             <div class=" text-right">
  //               <button type="button" class="btn btn-outline-primary">Edit</button>
  //               <button onClick={()=> deleteNote(note.id)} type="button" class="btn btn-outline-danger"><BsTrash size={20} /></button>
  //             </div>
  //         </Card>
  //       </div>
    
  //   </ul>
  // ))

  // return (
  //   <div>
  //     <h1 text align="center"> Your notes</h1>
  //     {noteList}
  //   </div>
  // )


