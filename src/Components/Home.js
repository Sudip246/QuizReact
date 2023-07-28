import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

function Home() {
  return (
    <div className="container">
      <h1>Welcome to the Quiz App!</h1>
      <p>
        This is a simple quiz app where you can test your knowledge on various
        topics.
      </p>
      <p>Click the button below to start the quiz!</p>
      <Link to="/name-details">
        <button>Start Quiz</button>
      </Link>
    </div>
  );
}

export default Home;
