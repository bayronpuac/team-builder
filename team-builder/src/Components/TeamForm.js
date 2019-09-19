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
    props.addNewTeamMember();
    setTeamMember({ name: '', email: '', role: '' });
  };

  return (
    
    <form onSubmit={submitForm}>
      <h1>Team Form</h1>
      <label for="title">Name</label>
      <input
        type="text"
        name="name"
        placeholder="Please enter your name"
        onChange={handleChanges}
        value={teamMember.name}
      />
      <label htmlFor="note">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter email here"
        onChange={handleChanges}
        value={teamMember.email}
      />
      <label htmlFor="note">Role</label>
      <input
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
