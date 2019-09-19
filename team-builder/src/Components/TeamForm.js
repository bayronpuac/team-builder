import React, { useState } from "react";


const TeamForm = props => {
  console.log(props);
  const [teamMember, setTeamMember] = useState({
    name: '',
    email: '',
    role: ''
  });
  const handleChanges = event => {
    setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
    
  };
  const submitForm = e => {
    e.preventDefault();
    const newTeamMember = {
      // creates new object for team.
      ...teamMember
    };

    props.addNewTeamMember(newTeamMember);
    setTeamMember({ name: '', email: '', role: '' });
  };

  return (
    
    <form onSubmit={submitForm}>
      <h1>Team Form</h1>
      <label for="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Please enter your name"
        onChange={handleChanges}
        value={teamMember.name}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Enter email here"
        onChange={handleChanges}
        value={teamMember.email}
      />
      <label htmlFor="role">Role</label>
      <input
        id="role"
        type="text"
        name="role"
        placeholder="Enter your role here"
        onChange={handleChanges}
        value={teamMember.role}
      />

      <button type="submit">Submit </button>
    </form>
  );
};

export default TeamForm;
