import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import NameDetails from "./Components/NameDetails";
import QuizCategories from "./Components/QuizCategories.js";
import Quiz from "./Components/Quiz";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/name-details" component={NameDetails} />
        <Route exact path="/quiz-categories" component={QuizCategories} />
        <Route path="/quiz/:category" component={Quiz} />
      </Switch>
    </Router>
  );
}

export default App;
