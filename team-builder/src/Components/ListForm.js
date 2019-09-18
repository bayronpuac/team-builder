import React, { useState } from "react";

const ListForm = props => {
  console.log(props);
  const [list, setList] = useState({
    title: "",
    body: ""
  });
  const handleChanges = event => {
    setList({ ...list, [event.target.name]: event.target.value });
    console.log(list);
  };
  const submitForm = e => {
    e.preventDefault();
    props.addNewList(list);
    setList({ title: "", body: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label for="title">Note Title</label>
      <input
        id="title"
        type="text"
        name="title"
        onChange={handleChanges}
        value={list.title}
      />
      <label htmlFor="note">Note</label>
      <textarea
        id="note"
        name="body"
        onChange={handleChanges}
        value={list.body}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default ListForm;
