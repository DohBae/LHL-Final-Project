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

 
 // WE SHOULD PUSH THIS UP SO WE WILL ONLY HAVE ONE OF THIS
 const id = 1 // this will come from auth state later

  return (
    <Container fluid>

    <div className="main-div">

      <Sidebar noteData={noteData} />
      <Main id={id} noteData={noteData}  />
    </div>
      
      
  
     </Container>
  )
}