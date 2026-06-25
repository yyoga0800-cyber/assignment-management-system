import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("Pending");

  const addAssignment = async () => {
    await axios.post("http://localhost:5000/assignments", {
      title,
      subject,
      dueDate,
      status,
    });

    alert("Assignment Added Successfully");
  };

  return (
    <div className="container">
      <h1>College Assignment Submission Tracker</h1>

      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Subject"
        onChange={(e) => setSubject(e.target.value)}
      />

      <input
        type="date"
        onChange={(e) => setDueDate(e.target.value)}
      />

      <select onChange={(e) => setStatus(e.target.value)}>
        <option>Pending</option>
        <option>Submitted</option>
        <option>Late</option>
      </select>

      <button onClick={addAssignment}>
        Add Assignment
      </button>
    </div>
  );
}

export default App;