import React, { useState } from "react";

const questions = [
  {
    question: "What is React?",
    options: [
      "A backend programming language",
      "A JavaScript library for building user interfaces",
      "An SQL database management system",
    ],
    correctAnswer: "A JavaScript library for building user interfaces",
  },
  {
    question: "Which of the following is used to manage the state in React?",
    options: ["props", "state", "context"],
    correctAnswer: "state",
  },
  {
    question: "What is JSX in React?",
    options: [
      "JavaScript Extension",
      "XML-like syntax for writing React components",
      "JavaScript XML",
    ],
    correctAnswer: "JavaScript XML",
  },
  {
    question: "How do you render a React component inside another component?",
    options: [
      "<ReactComponent />",
      "renderComponent(ReactComponent)",
      "<ReactComponent>",
    ],
    correctAnswer: "<ReactComponent />",
  },
  {
    question:
      "In React, what is the purpose of the 'key' prop when rendering a list of elements?",
    options: [
      "It sets the initial value of the element in the state",
      "It provides a unique identifier for each element in the list",
      "It specifies the order in which the elements are rendered",
    ],
    correctAnswer:
      "It provides a unique identifier for each element in the list",
  },
  {
    question:
      "Which lifecycle method is called after a component has been rendered to the screen in React?",
    options: ["componentWillMount", "componentDidMount", "componentRendered"],
    correctAnswer: "componentDidMount",
  },
  {
    question:
      "How can you pass data from a parent component to a child component in React?",
    options: [
      "By using the 'data' attribute on the child component",
      "By calling a function on the child component from the parent",
      "By passing props to the child component",
    ],
    correctAnswer: "By passing props to the child component",
  },
  {
    question: "What is the purpose of React Router?",
    options: [
      "To handle HTTP requests in React applications",
      "To manage the state of a React application",
      "To enable navigation and routing in a React application",
    ],
    correctAnswer: "To enable navigation and routing in a React application",
  },
  {
    question:
      "In React, what is the recommended way to update the state of a component?",
    options: [
      "Directly modify the state object",
      "Use the setState() method",
      "Use the updateState() method",
    ],
    correctAnswer: "Use the setState() method",
  },
  {
    question: "What are React hooks used for?",
    options: [
      "To connect React with external APIs",
      "To add event listeners to React components",
      "To add state and other React features to functional components",
    ],
    correctAnswer:
      "To add state and other React features to functional components",
  },
];

const allAnswers = [
  { option: null, isTrue: null },
  { option: null, isTrue: null },
  { option: null, isTrue: null },
  { option: null, isTrue: null },
  { option: null, isTrue: null },
  { option: null, isTrue: null },
  { option: null, isTrue: null },
  { option: null, isTrue: null },
  { option: null, isTrue: null },
  { option: null, isTrue: null },
];

const Questions = () => {
  const [count, setCount] = useState(0);
  const [answers, setAnswers] = useState(allAnswers);
  const [submit, setSubmit] = useState(false);

  const length = questions.length;
  const previousHandler = () => {
    if (count === 0) return;
    setCount(count - 1);
  };
  const nextHandler = () => {
    if (count === length - 1) return;
    setCount(count + 1);
  };
  const ansChecker = (index) => {
    const ans =
      questions[count].correctAnswer === questions[count].options[index];
    answers[count].isTrue = ans;
    answers[count].option = index;

    setAnswers([...answers]);

    console.log(index, answers);
  };

  return (
    <div className="w-screen flex flex-col mt-20 items-center gap-16 ">
      <h1 className=" max-sm:text-2xl max-sm:relative font-caveat tracking-wide text-center text-slate-100 text-5xl">
        {" "}
        Step into the world of Quizzy and embrace the quest for knowledge!
      </h1>
      <div className=" h-fit   max-sm:h-[30rem]  max-sm:w-3/4  max-sm:p-2 w-2/3 flex flex-col gap-10 bg-gray-600 rounded-xl overflow-hidden py-10 px-10">
        {submit ? (
          <div className="h-52 max-sm:py-28 flex flex-col items-center  gap-10">
            <h1 className="max-sm:text-xl  text-4xl">Your Score is Here!</h1>
            <h1 className="text-5xl">
              {answers.filter((answer) => answer.isTrue === true).length}/
              {length}
            </h1>
            <button
              onClick={()=>setSubmit(false)}
              className="px-20 py-2 bg-gray-800 text-white rounded-lg hover:bg-slate-950 active:bg-slate-200"
            >
              Go Back
            </button>
          </div>
        ) : (
          <>
            <div className=" max-sm:text-lg text-lg  flex-grow  h-14 bg-slate-700 p-3 border-2 rounded-md border-slate-800 text-cyan-100">
              {[count + 1]}. {questions[count].question}
            </div>
            <div className="flex  flex-col gap-3">
              {questions[count].options.map((option, i) => (
                <div
                  onClick={() => ansChecker(i)}
                  key={i}
                  className={`p-3 max-sm:h-fit max-sm:text-sm  cursor-pointer rounded-md border-2  ${
                    answers[count].option === i
                      ? answers[count].isTrue
                        ? " bg-emerald-500 hover:bg-emerald-600"
                        : " bg-rose-400 hover:bg-rose-500"
                      : "bg-slate-400 hover:bg-slate-300"
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>

            <div className=" flex   justify-between ">
              <button
                onClick={previousHandler}
                className="max-sm:py-1  max-sm:px-3  px-5 py-2 bg-gray-800 text-white  rounded-lg  hover:bg-slate-950 active:bg-slate-200"
              >
                prev
              </button>
              {count !== length - 1 && (
                <button
                  onClick={nextHandler}
                  className=" max-sm:py-1  max-sm:px-3  px-5 py-2 bg-gray-800 text-white rounded-lg  hover:bg-slate-950 active:bg-slate-200"
                >
                  next
                </button>
              )}
              {count === length - 1 && (
                <button
                  onClick={()=>setSubmit(true)}
                  className="  px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-slate-950 active:bg-slate-200"
                >
                  submit
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Questions;
