import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch('https://silver-system-7xgrp695jrp3j6r-8000.app.github.dev/api/leaderboard')
      .then(response => response.json())
      .then(data => setLeaders(data));
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Leaderboard</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map(leader => (
              <tr key={leader.id}>
                <td>{leader.id}</td>
                <td>{leader.name}</td>
                <td>{leader.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
