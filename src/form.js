import React, { useState } from "react";
import Entrieslist from "./EntriesList";
import './styles/form.css'

function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");

  const [entries, setEntries] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if title, description, and time are not empty
    if (
      title.trim() !== "" &&
      description.trim() !== "" &&
      time.trim() !== ""
    ) {
      // Create new entry object
      const newEntry = {
        title: title,
        description: description,
        time: time,
      };
      // Call the addEntry function passed from the parent component
     setEntries((entry)=> [...entry, newEntry])
    console.log(newEntry)
      // Clear form fields
      setTitle("");
      setDescription("");
      setTime("");
    } else {
      // Display error message if any of the fields are empty
      alert("Please fill in all fields");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-box">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="input-box">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="input-box">
        <label htmlFor="time">Time:</label>
        <input
          type="text"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button type="submit">Add Entry</button>

      <Entrieslist entries={entries} />
    </form>
  );
}

export default Form;
