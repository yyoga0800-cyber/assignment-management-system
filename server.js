const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let assignments = [];

app.get("/assignments", (req, res) => {
  res.json(assignments);
});

app.post("/assignments", (req, res) => {
  assignments.push(req.body);
  res.json({ message: "Assignment Added Successfully" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});