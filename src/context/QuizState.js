
// import React, { useState, useEffect } from 'react';
// import quizContext from './quizContext';  // Use lowercase 'quizContext'

// const QuizState = ({ children }) => {
//   // Admin Authentication State
//   const [adminAuthenticated, setAdminAuthenticated] = useState(false);

//   // Quiz-related States
//   const [questions, setQuestions] = useState([]);
//   const [score, setScore] = useState({ rightAnswers: 0, wrongAnswers: 0 });
//   const [next, setNext] = useState(0);
//   const [url, setUrl] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [answerList, setAnswerList] = useState([]);

//   // Function to fetch quiz questions based on URL
//   const fetchQuestions = async (url) => {
//     setLoading(true);
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       setQuestions(data.results);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//       setLoading(false);
//     }
//   };

//   // Fetch questions based on the URL change (useEffect)
//   useEffect(() => {
//     if (url) {
//       fetchQuestions(url);
//     }
//   }, [url]);

//   return (
//     <quizContext.Provider
//       value={{
//         adminAuthenticated,
//         setAdminAuthenticated,
//         questions,
//         setQuestions,
//         score,
//         setScore,
//         next,
//         setNext,
//         url,
//         setUrl,
//         loading,
//         setLoading,
//         answerList,
//         setAnswerList,
//         fetchQuestions,
//       }}
//     >
//       {children}
//     </quizContext.Provider>
//   );
// };

// export default QuizState;

import QuizContext from "./quizContext";
import { useEffect, useState } from "react";

const QuizState = (props) => {
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState({ 'rightAnswers': 0, 'wrongAnswers': 0 });
    const [next, setNext] = useState(0);
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const len = questions.length;
    const [answerList, setAnswerList] = useState([]);

    const fetchQuestions = async (api) => {
        const response = await fetch(api);
        const data = await response.json();
        let results = data.results;
        setQuestions(results);
        setLoading(false);
    };

    useEffect(() => {
        fetchQuestions(url);
    }, [url]);

    return (
        <QuizContext.Provider value={{ 
            answerList, setAnswerList, len, questions, setQuestions, 
            url, setUrl, fetchQuestions, loading, setLoading, 
            score, setScore, next, setNext }}>
            {props.children}
        </QuizContext.Provider>
    );
}

export default QuizState;
