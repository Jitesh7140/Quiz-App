import React from "react";
import { useState, useEffect } from "react";
import "./Question.css";
import { data } from "../assets/data";

function Questions() {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);
  
  

  const checkanser = (e, ans) => {
    if (lock === false) {
      if (ans === question.ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore(score + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
         
      }
    }
  };

  let increment = () => {
    if (index === data.length -1) {
      console.log(score ,"this the score");
      setResult(true);
      return 0
      
    } 

    if (lock === true) {
      setLock(false);
      document.querySelectorAll(".correct").forEach((item) => {
        item.classList.remove("correct");
      });
      document.querySelectorAll(".wrong").forEach((item) => {
        item.classList.remove("wrong");
      });
    }
   
    setIndex(++index);
    setQuestion(data[index]);
    console.log(index);
  };

  let reset = () => {
    setIndex(0);
    setQuestion(data[index]);
    setLock(false);
    setScore(0);
    setResult(false);
  }

  return (
    <>
      <div className="rounded-lg bg-white shadow-lg py-4 px-4 sm:px-9">
        <h1 className="font-extrabold my-3">Quzi App</h1>
        <hr className="hg-line " />

      {result?
      <>
      <h1 className="py-4" >{score} out of {data.length}</h1>
      <div className="flex gap-3  justify-center items-center mt-4"> 
          <button
            onClick={() => {
              reset();
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-14 cursor-pointer rounded"
          >
            Reset
          </button>
        </div>{" "}
      </>
      
      :
      <>
        <p className="font-bold text-sm my-3 sm:my-4">
          {index + 1}. {question.question}
        </p>
        <div
          onClick={(e) => {
            checkanser(e, 1);
          }}
          className="w-full cursor-pointer border-1 hover:bg-blue-100 border-violet-700 rounded-lg p-2 my-4  sm:p-3 sm:my-3"
        >
          {question.option1}
        </div>
        <div
          onClick={(e) => {
            checkanser(e, 2);
          }}
          className="w-full cursor-pointer border-1 hover:bg-blue-100 border-violet-700 rounded-lg  p-2 my-4  sm:p-3 sm:my-3"
        >
          {question.option2}
        </div>
        <div
          onClick={(e) => {
            checkanser(e, 3);
          }}
          className="w-full cursor-pointer border-1 hover:bg-blue-100 border-violet-700 rounded-lg  p-2 my-4  sm:p-3 sm:my-3"
        >
          {question.option3}
        </div>
        <div
          onClick={(e) => {
            checkanser(e, 4);
          }}
          className="w-full cursor-pointer border-1 hover:bg-blue-100 border-violet-700 rounded-lg  p-2 my-4  sm:p-3 sm:my-3"
        >
          {question.option4}
        </div>

        <div className="flex gap-3  justify-center items-center mt-4"> 
          <button
            onClick={() => {
              increment();
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-14 cursor-pointer rounded"
          >
            Next
          </button>
        </div>{" "}

        <div className="flex flex-col justify-center items-center mt-4">
          <p className="place-items-center block ">
            {index + 1} of {data.length} question
          </p>
        </div>{" "}
      </>}

       

      </div>
    </>
  );
}

export default Questions;
