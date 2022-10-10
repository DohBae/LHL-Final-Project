import React from 'react';
import { useContext } from 'react';
// import { noteContext } from 'providers/NoteProvider';
import { noteContext } from '../providers/NoteProvider';
import './Notes.css'
import Card from 'react-bootstrap/Card';
import '../App.css';
import './ViewNote.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


// export default function HistoryNotes() {

//   const {allNotes, setAllNotes} = useContext(noteContext);

//   const noteList = allNotes.filter((note) => note.name ==="history")

// }




export default function ViewHistoryNotes() {

  const {allNotes} = useContext(noteContext);

  const noteList = allNotes.filter((note) => note.class_id === 1)


  const noteListed = noteList.map((note, i) => (
      
 <ul>
    
    
        <Card border="dark" key={i} style={{ width: '30rem' , height: '30rem'}} href="/addNotes" >
          <Card.Body>
            <Card.Title className="text-center">{note.title}</Card.Title>
            {/* <div  class=" text-right">
              <button type="button" class="btn btn-outline-primary">Edit</button>
              <button type="button" class="btn btn-outline-danger">Delete</button>
            </div> */}
            <Card.Text >{note.body.substr(0,300) + "....."}</Card.Text>
            <Card.Link href="/viewNote"><p text align="center"  decoration="none">View note</p></Card.Link>
    
          </Card.Body>
        </Card>
       
    </ul>
    ))
    

    return (
      <div class="row">
        {noteListed}
      {/* <div class="column">
        <div class="card">{noteListed}</div>
      </div> */}
      </div>
    );
  }
