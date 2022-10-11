import React, { useState, useEffect } from 'react';
import User from "./User";
import Notes from "./Notes";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from 'react-router-dom';
import '../App.css';


function Dashboard() {

  ////// login authentication ////////
  const navigate = useNavigate()
  const [user, setUser] = useState({})

  function checkLogin() {
    const userObject = localStorage.getItem('notifyUser')

    if (!userObject) {
      navigate("/auth")
    }
    setUser(JSON.parse(userObject))
  }

  useEffect(() => {
    checkLogin()
  }, [])
  ////////////////////////////////

  return (
    <div align="center">
      <Container fluid>
        <Stack direction="horizontal" gap={3}>
          <Row>
            <Col>
              <User />
            </Col>
            <Col>
              <Stack gap={3}>
                <Notes />
              </Stack>
            </Col>
          </Row>
        </Stack>
      </Container>
    </div>
  );
}

export default Dashboard;
