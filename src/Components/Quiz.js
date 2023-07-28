import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from 'axios';
import { useParams } from "react-router-dom";
import "./Quiz.css"
import Result from'./Result'

function Quiz(){
  const [quizData, setQuizData] = useState([]);
  const [userAnswers, setUserAnswer] = useState(new Map());
  const [result, setResult] = useState(0);
  const [isFinishQuiz, setIsFinishQuiz] = useState(false);
  const { category } = useParams();
  const answerIndex = ["A", "B", "C", "D"];
  const totalQuestions = 10;
  
  useEffect(() => {
    getQuizData();
  }, [category]);

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const getQuizData = () => {
    axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=easy&type=multiple`)
      .then(function (response) {
        // handle success
        const data=[];
        response.data['results'].forEach((item, index) => {
          let answers = item.incorrect_answers;
          answers.push(item.correct_answer);
          item.answers = shuffle(answers);
          item.id = `que_${index}`
          data.push(item);
        });
        setQuizData(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const onCalculateResult = () => {
    let result = 0;
    quizData.forEach((que) => {
      if (userAnswers.get(que.id) === que.correct_answer) {
        result = result + 1;
      }
    });
    setResult(result);
    setIsFinishQuiz(true);
  };

  return (
    <div className="quizContainer" >
     {isFinishQuiz?
    <Result score={result} totalQuestions={totalQuestions} />:
    <div>
      {quizData.map((item)=> 
      <div>
        <div className="quesTitle">{item.question} </div>
        <div className="answerContainer">
        {item.answers.map((ans, index)=>
        <Button key={index} onClick={() =>{
          userAnswers.set(item.id, ans);
          setUserAnswer(new Map (userAnswers));
        }}
        variant="contained" style = {{ background : userAnswers.get(item.id)=== ans? 'blue': '#fff'}}>
          <div className = "circle">{answerIndex[index]}</div>{ans}</Button> 
        )}
         </div>
        
      </div>
      )}
      <Button onClick={() => onCalculateResult()} className="nxtbtn">Finish</Button>
    </div>
    }
</div>
)
}

export default Quiz;
