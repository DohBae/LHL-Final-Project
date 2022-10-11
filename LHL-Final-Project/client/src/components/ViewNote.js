import React from 'react';
import { useContext } from 'react';
// import { noteContext } from 'providers/NoteProvider';
import { noteContext } from '../providers/NoteProvider';
import './Notes.css'
import Card from 'react-bootstrap/Card';
import '../App.css';
import { useNavigate } from 'react-router-dom';
export default function ViewNote () {

  const {allNotes, noteIdToShow, addNoteToFavorites, noteIdSaved, buttonStatus,
    setChange,setButtonStatus, isNoteIdSaved, selectNoteIdToShow} = useContext(noteContext);
  const navigate = useNavigate()

  const noteList = allNotes.filter((note) => note.id === noteIdToShow)


  const noteListed = noteList.map((note, i) => (
      
<ul>
    
    
        <Card border="dark" key={i} style={{ width: '70rem', height: '40rem'} } href="/addNotes" >
          <Card.Body>
            <Card.Title className="text-center">{note.title}</Card.Title>
            <Card.Text  style={{fontsize:80}}>{note.body}</Card.Text>
            <br></br>
            <div align="right">
          <button disabled={buttonStatus} id='myButton' type="button" class="btn btn-outline-primary" 
          onClick={() => {addNoteToFavorites(note.id);
            setChange("changed")
           navigate('/favorites');
           }}>{noteIdSaved}</button>
            </div>
          </Card.Body>
            {/* <div class=" text-right">
              <button type="button" class="btn btn-outline-primary">Edit</button>
              <button type="button" class="btn btn-outline-danger">Delete</button>
            </div> */}
            
          
        </Card>
        </ul>
    ))
    

    return (
      <div align="center" className='div1'>
        <h1 text align= "center"> </h1>
        
          {noteListed}
        
      </div>
    );
  }
