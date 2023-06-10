import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from "@ramonak/react-progress-bar";
import PopupLogout from '../../components/Popup/PopupLogout';
import QuizTimer from "../../components/QuizTimer/QuizTimer";
import CountUp from 'react-countup';
import Question from "../../components/Question/Question";
import './Quiz.css';

function Quiz(){
    // to run fetchQuiz function once only 
    const [isUserValid, setIsUserValid] = useState(false);
    const [questions, setQuiz] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [popup, setPopup] = useState(false);
    const [update, setUpdate] = useState(false);
    let navigate = useNavigate();

    useEffect(() =>{
        axios.get('http://localhost/session.php', {withCredentials: true})
            .then(res => {
                if(res.data.UserID === "unauthorised")  
                    setIsUserValid(false);
                else {
                    setIsUserValid(true);
                    fetchQuiz();
                } 
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const fetchQuiz = async () => {
        try {
            const { data } = await axios.get('http://localhost/getQuestions.php', {withCredentials: true})
            setQuiz(data);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if(update) {
            axios.post('http://localhost/updatePoints.php', score, {withCredentials: true})
            .then(response => console.log(response))
            .catch(err => console.log(err));

            setPopup(true); // show the popup message to user for 3 seconds.
            setTimeout(() => navigate("../dashboard"), 3000);
        }
    },[navigate, score, update])

    const handleButtonClick = isCorrect => {
        const nextQuestion = currentQuestion + 1;
        if (isCorrect) 
            setScore(score + 5);

        if(nextQuestion < questions.length)
            setCurrentQuestion(nextQuestion);
        else
            setUpdate(true);
    }

    const exit = () => {
        if (window.confirm("Do you really want to leave?")) {
            navigate("../dashboard");
        }
    }

    if(isUserValid && questions.length > 0) {
        return (
            <div>
                <nav className="quiz-nav" >
                    <FontAwesomeIcon icon={faXmark} id="out-logo" onClick={exit}/>
                    <div className="progressbar" >
                        <ProgressBar 
                            completed={currentQuestion+1} 
                            maxCompleted={questions.length} 
                            customLabel={currentQuestion+1}  
                        />
                    </div>
                    <div><QuizTimer /></div>
                    <div className="points-earned">
                        Points earned: 
                        <CountUp start={score < 5 ? score : score - 5 } end={score} duration={0.5}/>/{questions.length*5}  
                    </div>
                </nav>
                <Question 
                    questionData={questions[currentQuestion]}
                    handleButtonClick={handleButtonClick}
                />
                <PopupLogout trigger={popup}> 
                    You finished it! You will be redirected to the dashboard. 
                </PopupLogout>
            </div>
        )
    } else {
        return (
            <PopupLogout trigger={!isUserValid}>
                You should login first! Click here to sign in..   
            </PopupLogout>
        );
    }
}

export default Quiz;