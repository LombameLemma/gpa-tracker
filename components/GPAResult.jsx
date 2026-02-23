import React from "react";

function GPAResult({ courses }) {
  const getGradePoint = (grade) => {
    switch (grade) {
      case "A":
        return 4;
      case "B":
        return 3;
      case "C":
        return 2;
      case "D":
        return 1;
      case "F":
        return 0;
      default:
        return 0;
    }
  };

  const calculateGPA = () => {
    if (courses.length === 0) return 0;

    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach((course) => {
      totalPoints += getGradePoint(course.grade) * course.credit;
      totalCredits += course.credit;
    });

    return (totalPoints / totalCredits).toFixed(2);
  };

  return (
    <div>
      <h2>Your GPA: {calculateGPA()}</h2>
    </div>
  );
}

export default GPAResult;