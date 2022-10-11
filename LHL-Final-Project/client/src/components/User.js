import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';


export default function User(props) {

  const [backendData, setBackendData] = useState(undefined)
  //const id = 1;
  // use localStorage to collect user data to auto populate
  const profilePic = JSON.parse(localStorage.getItem('notifyUser')).profilepic
  const id = JSON.parse(localStorage.getItem('notifyUser')).id
  useEffect(() => {
    fetch(`/users/${id}`).then(
      res => res.json())
      .then(data => {setBackendData(data)})
    }, [])
    
  return (
    <div>

      {backendData ? (backendData.userData.map((user) => (
        <Card classname="profileCard" class="border-0" key={user.id} style={{ width: '25rem' }} >
        
          <Card.Img classname="profilePic" variant="top" src={user.profilepic} alt="Profile Pic" class="rounded-top"/>
          <Card.Body>
            <Card.Title className="text-center">{user.firstname} {user.lastname}</Card.Title>
            <Card.Text className="text-center"> {user.phonenumber}  </Card.Text>
            <Card.Text className="text-center">{user.email} </Card.Text>
          </Card.Body>
        </Card>
      ))
      ) : (

        <p>Loading...</p>
      )}

    </div>

  );
}