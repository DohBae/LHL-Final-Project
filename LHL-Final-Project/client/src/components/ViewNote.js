import React from 'react';
import { useContext } from 'react';
import { noteContext } from '../providers/NoteProvider';
import './Notes.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { BsBoxArrowLeft } from 'react-icons/bs';

export default function ViewNote() {

  const { allNotes, noteIdToShow, addNoteToFavorites, noteIdSaved, buttonStatus,
    setChange, setButtonStatus, isNoteIdSaved, selectNoteIdToShow } = useContext(noteContext);

  const noteList = allNotes.filter((note) => note.id === noteIdToShow)
  const navigate = useNavigate()

  const handleOnClick = (e) => {
    e.preventDefault()
    navigate(-1)
  }

  const noteListed = noteList.map((note, i) => (

    <ul>
      <Card border="dark" key={i} style={{ width: '70rem', height: '40rem' }} href="/addNotes" >
        <Card.Body>
          <Card.Title className="text-center">{note.title}</Card.Title>
          <Card.Text style={{ fontsize: 80 }}>{note.body}</Card.Text>
          <br></br>
        </Card.Body>
        <Card.Footer>
          <div align="right" className="fav-button">
            <Button variant="outline-primary" onClick={handleOnClick}>
              <BsBoxArrowLeft size={25} />
            </Button>
            <button disabled={buttonStatus} id='myButton' type="button" class="btn btn-outline-primary"
              onClick={() => {
                addNoteToFavorites(note.id);
                setChange("changed")
                navigate('/favorites');
              }}>{noteIdSaved}</button>
          </div>
        </Card.Footer>
      </Card>
    </ul>
  ))

  return (
    <div align="center" className='div1'>
      <h1 text align="center"> </h1>
      {noteListed}
    </div>
  );
}
