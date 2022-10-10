import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { useNavigate } from 'react-router-dom';

export default function NavBar(props) {

  //INCOMING CODE
   // toggle login/register button with logout

  const navigate = useNavigate()
  const userObject = localStorage.getItem('notifyUser')
  console.log("USEROBJECT: ", userObject)
  const handleOnClick = (e) => {
    e.preventDefault()
    localStorage.removeItem('notifyUser')
    navigate("/auth")
  }


  const [classData, setClassData] = useState(undefined)
  const [activeLink, setActiveLink] = React.useState('dashboard');

  useEffect(() => {
    fetch("/classes").then(
      res => res.json())
      .then(data => setClassData(data))
    }, [])

if (userObject) {

  return (


    <Navbar bg="color" variant="dark" fixed="top" expand="lg">
      <Navbar.Brand>
        <img src="https://cdn.vectorstock.com/i/1000x1000/45/29/cute-dog-flat-logo-icon-vector-32724529.webp" width="50" hight="50" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>

        <Nav
        // defaultActiveKey={activeLink}
        // onSelect={(selectedKey, e) => {
        //   setActiveLink(selectedKey);
        // }}
        >
          <Nav.Link href="/dashboard" eventKey="dashboard"> Dashboard</Nav.Link>
          <Nav.Link href="/addNotes" eventKey="note"> Add Notes</Nav.Link>
          <Nav.Link href=""> Favorites</Nav.Link>
          <NavDropdown title="Classes">

          <DropdownItem href="/historyNotes"> History</DropdownItem>
          <DropdownItem href="/mathNotes"> Math</DropdownItem>
          <DropdownItem href="/literatureNotes"> Literature</DropdownItem>


            {/* {arr1} */}
          </NavDropdown>
          <Nav.Link> Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  ) 
} else {
  return (
    <Navbar bg="color" variant="dark" fixed="top" expand="lg">
      <Navbar.Brand>
        <img src="https://cdn.vectorstock.com/i/1000x1000/45/29/cute-dog-flat-logo-icon-vector-32724529.webp" width="100" hight="50" alt="Brand Logo"/>
      </Navbar.Brand>
      <Navbar.Brand>Notify</Navbar.Brand>
    </Navbar>
    
  )
}




  // // toggle login/register button with logout
  // const navigate = useNavigate()
  // const userObject = localStorage.getItem('notifyUser')
  // console.log("USEROBJECT: ", userObject)
  // const handleOnClick = (e) => {
  //   e.preventDefault()
  //   localStorage.removeItem('notifyUser')
  //   navigate("/auth")
  // }

  // if (userObject) {

  //   return (
  
  
  //     <Navbar bg="color" variant="dark" fixed="top" expand="lg">
  //       <Navbar.Brand>
  //         <img src="https://cdn.vectorstock.com/i/1000x1000/45/29/cute-dog-flat-logo-icon-vector-32724529.webp" width="100" hight="50" alt="Brand Logo" />
  //       </Navbar.Brand>
  //       <Navbar.Toggle />
  //       <Navbar.Collapse>
  
  //         <Nav
  //           defaultActiveKey={activeLink}
  //           onSelect={(selectedKey, e) => {
  //             setActiveLink(selectedKey);
  //           }}
  //         >
  //           <Nav.Link href="/dashboard" eventKey="dashboard"> Dashboard</Nav.Link>
  //           <Nav.Link href="/note" eventKey="note"> Add Notes</Nav.Link>
  //           <Nav.Link href=""> Favorites</Nav.Link>
  //           <NavDropdown title="Classes">
  //             <DropdownItem href=""> Math</DropdownItem>
  //             <DropdownItem href=""> History</DropdownItem>
  //             <DropdownItem href=""> Programing</DropdownItem>
  //           </NavDropdown>
  //             <Nav.Link href="/auth" eventKey="auth" onClick={handleOnClick}> Logout</Nav.Link>
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Navbar>
  
  //   )
  // } else {
  //   return (
  //     <Navbar bg="color" variant="dark" fixed="top" expand="lg">
  //       <Navbar.Brand>
  //         <img src="https://cdn.vectorstock.com/i/1000x1000/45/29/cute-dog-flat-logo-icon-vector-32724529.webp" width="100" hight="50" alt="Brand Logo"/>
  //       </Navbar.Brand>
  //       <Navbar.Brand>Notify</Navbar.Brand>
  //     </Navbar>
      
  //   )
  // }
  
  
  
  
  
  
  
  
  
  
  
  // return (


  //   <Navbar bg="color" variant="dark" fixed="top" expand="lg">
  //     <Navbar.Brand>
  //       <img src="https://cdn.vectorstock.com/i/1000x1000/45/29/cute-dog-flat-logo-icon-vector-32724529.webp" width="100" hight="50" />
  //     </Navbar.Brand>
  //     <Navbar.Toggle />
  //     <Navbar.Collapse>

  //       <Nav
  //         defaultActiveKey={activeLink}
  //         onSelect={(selectedKey, e) => {
  //           setActiveLink(selectedKey);
  //         }}
  //       >
  //         <Nav.Link href="/dashboard" eventKey="dashboard"> Dashboard</Nav.Link>
  //         <Nav.Link href="/note" eventKey="note"> Add Notes</Nav.Link>
  //         <Nav.Link href=""> Favorites</Nav.Link>
  //         <NavDropdown title="Classes">
  //           <DropdownItem href=""> Math</DropdownItem>
  //           <DropdownItem href=""> History</DropdownItem>
  //           <DropdownItem href=""> Programing</DropdownItem>
  //         </NavDropdown>
  //         {userObject ? (
  //           <Nav.Link href="/auth" eventKey="auth" onClick={handleOnClick}> Logout</Nav.Link>

  //         ) : (
  //           <Nav.Link href="/auth" eventKey="auth">Login/Register</Nav.Link>
  //         )}
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Navbar>

  // )


}