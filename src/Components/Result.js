import React from 'react';
import "./Result.css"

const Result = ({ score, totalQuestions }) => {
  const calculatePercentage = (score, totalQuestions) => {
    return ((score / totalQuestions) * 100).toFixed(2);
  };

  return (
    <div className="boxContainer"> 
    <div className="box"> 
      <h2>Quiz Result</h2>
      <p>You scored {score} out of {totalQuestions} questions.</p>
      <br/>
      <p>Your percentage: {calculatePercentage(score, totalQuestions)}%</p>
    </div>
  </div>
  );
};

export default Result;