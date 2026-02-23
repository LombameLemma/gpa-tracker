import React, { useState } from "react";

function CourseForm({ addCourse }) {
  const [name, setName] = useState("");
  const [credit, setCredit] = useState("");
  const [grade, setGrade] = useState("A");
  const [semester, setSemester]=useState("Semester 1");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !credit) {
      alert("Please fill all fields");
      return;
    }

    addCourse({
      name,
      credit: Number(credit),
      grade,
      semester,
    });

    setName("");
    setCredit("");
    setGrade("A");
    setSemester("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
    <select value={semester} onChange={(e)=>setSemester(e.target.value)}>
      <option value="Semester 1">Semester 1</option>
      <option value="Semester 2">Semester 2</option>
      <option value="Semester 3">Semester 3</option>
    </select>
      <input
        type="text"
        placeholder="Course Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Credit Hours"
        value={credit}
        onChange={(e) => setCredit(e.target.value)}
      />

      <select value={grade} onChange={(e) => setGrade(e.target.value)}>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="F">F</option>
      </select>

      <button type="submit">Add Course</button>
    </form>
  );
}

export default CourseForm;