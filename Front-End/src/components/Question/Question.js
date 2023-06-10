import React from 'react';

const Question = ({ questionData, handleButtonClick }) => {
    if(questionData.questionType === "type_a") {
        return (
            <div className="main-quiz">
                <div className="question">{questionData.questionText}</div>
                <div className="answers">
                    {questionData.answerOptions.map((answerOption) => (
                        <button id="button-choice" onClick={() => handleButtonClick(answerOption.isCorrect)} >
                            <div className="choice"> 
                                <img src={require(`../../assets/images/${answerOption.answerText}.png`)}/>
                            </div>
                        </button>
                    ))}
                </div>     
            </div>
        );
    } else if(questionData.questionType === "type_b") {
        return (
            <div className="main-quiz">
                <div className="question">
                    <img style={{maxWidth:"20%", minHeight:"100%"}} src={require(`../../assets/images/${questionData.questionImage}.png`)}/>
                    {questionData.questionText}
                </div>
                <div className="answers" style={{flexDirection: "column", flexWrap:"nowrap", marginRight:"1em"}}>
                    {questionData.answerOptions.map((answerOption) => (
                        <button id="button-choice" onClick={() => handleButtonClick(answerOption.isCorrect)} >
                            <div className="choice" style={{minHeight: "1em", padding:"0.5em", flexDirection: "row", justifyContent:"flex-start"}} > 
                                {answerOption.answerText}
                            </div>
                        </button>
                    ))}
                </div>     
            </div>
        );
    }
}

export default Question;