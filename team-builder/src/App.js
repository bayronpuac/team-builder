import React, {useState} from 'react';
import TeamForm from './Components/TeamForm';
import Team from './Components/Team';
import data from './Components/data';

import './App.css';

function App() {

  const [teamMember, setTeamMember] = useState (data);

  const addNewTeamMember = newMember => {
    setTeamMember([...teamMember, newMember]);
  };
  return (
    <div className="App">
      <TeamForm addNewTeamMember={addNewTeamMember} />
      <Team teamMember={teamMember} />
    </div>
  );
}

export default App;
