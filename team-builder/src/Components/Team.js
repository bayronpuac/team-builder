import React from 'react';

function Team(props) {
  return (
    <>
      {props.teamMember.map(member => (
        <div className="row" key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </>
  );
};

export default Team;