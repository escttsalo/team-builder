import './App.css';
import React, { useState } from 'react';

const initialVals = {
  username: '',
  email: '',
  role: '',
  date: '',
}

function App() {
  const [members, setMembers] = useState([]);

  const [formVals, setFormVals] = useState(initialVals);

  return (
    <div className="App">
      <h1>Team Members</h1>

      {
      members.length>0 && 
      members.map(member => {
        return (
        <div className='container'>
          <h2>{member.name}</h2>
        </div>
        )
      })
      }
    </div>
  );
}

export default App;
