import './App.css';
import React, { useState } from 'react';

import Member from './Member';
import Form from './Form';

const initialVals = {
  id: '',
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
          <Member key={member.id} member={member}/>
        )
      })
      }

      <Form 
      update={setFormVals}
      values={formVals}
      />
    </div>
  );
}

export default App;
