import './App.css';
import React, { useState } from 'react';

import Member from './Member';
import Form from './Form';

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
      members.map( (member, i )=> {
        return (
          <Member key={i} member={member}/>
        )
      })
      }

      <Form 
      update={setFormVals}
      submit={setMembers}
      values={formVals}
      />
    </div>
  );
}

export default App;
