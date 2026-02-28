import React, { useState, useEffect } from "react";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import GPAResult from "./components/GPAResult";
import "./index.css";

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem("courses"));
    if (savedCourses) setCourses(savedCourses);
  }, []);

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  const addCourse = (course) => setCourses([...courses, course]);
  const deleteCourse = (index) =>
    setCourses(courses.filter((_, i) => i !== index));

  return (
    <div className="container">
      <h1>Student GPA Tracker</h1>
      <CourseForm addCourse={addCourse} />
      <CourseList courses={courses} deleteCourse={deleteCourse} />
      <GPAResult courses={courses} />
    </div>
  );
}
//
export default App;
