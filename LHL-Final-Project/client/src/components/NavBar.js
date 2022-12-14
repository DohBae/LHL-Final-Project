import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { useNavigate } from 'react-router-dom';
import { GiNotebook } from 'react-icons/gi'
import Logo from './logo.PNG';

export default function NavBar(props) {

  //INCOMING CODE
  const [classData, setClassData] = useState(undefined)
  const [activeLink, setActiveLink] = React.useState('dashboard');

  // toggle login/register button with logout
  const navigate = useNavigate()
  const userObject = localStorage.getItem('notifyUser')
  //  console.log("USEROBJECT: ", userObject)
  const handleOnClick = (e) => {
    e.preventDefault()
    localStorage.removeItem('notifyUser')
    navigate("/auth")
  }

  if (userObject) {
    return (
      <Navbar bg="color" variant="dark" fixed="top" expand="lg">
        <Navbar.Brand>
          <div className="logo" >
            <img src={Logo} width="70px" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav
          >
            <Nav.Link href="/dashboard" eventKey="dashboard"> Dashboard</Nav.Link>
            <Nav.Link href="/addNotes" eventKey="note"> Add Notes</Nav.Link>
            <Nav.Link href="/favorites"> Favorites</Nav.Link>
            <NavDropdown title="Class Notes">
              <DropdownItem href="/historyNotes"> History</DropdownItem>
              <DropdownItem href="/mathNotes"> Math</DropdownItem>
              <DropdownItem href="/literatureNotes"> Literature</DropdownItem>
            </NavDropdown>
            <Nav.Link href="/auth" eventKey="auth" onClick={handleOnClick}> Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  } else {
    return (
      <Navbar bg="color" variant="dark" fixed="top" expand="lg">
        <Navbar.Brand>
          <div className="logo" >
            <img src={Logo} width="70px" />
          </div>
        </Navbar.Brand>
        <Navbar.Brand>Notify</Navbar.Brand>
      </Navbar>
    )
  }
}