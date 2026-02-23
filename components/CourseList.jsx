import React from "react";

function CourseList({ courses, deleteCourse }) {
  return (
    <div>
      <h2>Course List</h2>
      {courses.length === 0 ? (
        <p>No courses added yet.</p>
      ) : (
        <ul>
          {courses.map((course, index) => (
            <li key={index}>
              {course.name} - {course.credit} credits - Grade: {course.grade}
              <button onClick={() => deleteCourse(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CourseList;