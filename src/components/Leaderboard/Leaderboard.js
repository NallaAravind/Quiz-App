// Leaderboard.js
import React, { useEffect, useState } from 'react';
import { Container, Table, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Leaderboard.css';


const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching leaderboard data (can be replaced with actual API call)
    const data = [
      { username: 'user1', score: 150 },
      { username: 'user2', score: 200 },
      { username: 'user3', score: 180 },
    ];
    setLeaderboard(data);
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2 className="text-center mb-4">Leaderboard</h2>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Username</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.username}</td>
                  <td>{entry.score}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* <Button variant="primary" onClick={() => navigate('/admin')} className="mt-3">
            Back to Admin Dashboard
          </Button> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Leaderboard;
