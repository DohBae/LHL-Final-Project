import React from 'react';
import { useContext } from 'react';
// import { noteContext } from 'providers/NoteProvider';
import { noteContext } from '../providers/NoteProvider';
import './Notes.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { useNavigate } from 'react-router-dom';

export default function ViewNote () {

  const {allNotes, noteIdToShow} = useContext(noteContext);

  const noteList = allNotes.filter((note) => note.id === noteIdToShow)
  const navigate = useNavigate()

  const handleOnClick = (e) => {
    e.preventDefault()
    navigate(-1)
  }

  const noteListed = noteList.map((note, i) => (
      
<ul>
        <Card border="dark" key={i} style={{ width: '70rem', height: '40rem'} } href="/addNotes" >
          <Card.Body>
            <Card.Title className="text-center">{note.title}</Card.Title>
            <Card.Text  style={{fontsize:80}}>{note.body}</Card.Text>
          </Card.Body>
            {/* <div class=" text-right">
              <button type="button" class="btn btn-outline-primary">Edit</button>
              <button type="button" class="btn btn-outline-danger">Delete</button>
            </div> */}
            <div className="d-grid gap-2">
              <Button variant="outline-primary" size="lg" onClick={handleOnClick}>
                Back to Notes
              </Button>
            </div>
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
