import React, { useState } from 'react'

const TextBoxQuestion = ({ websiteInfo, question, placeholder, resultName, setWebsiteInfo }) => {
    const [answer, setAnswer] = useState("");
    
    //prob also need to pass in the setState for websiteInfo
    const onSubmit = (e) => {
        e.preventDefault();
        if (answer !== null && answer !== "") {
            const nextQuestion = websiteInfo.questionNumber += 1;
            setWebsiteInfo(prevState => { return { ...prevState, [resultName]: answer, questionNumber: nextQuestion }});
        }
    }

    const onChange = (e) => {
        setAnswer(e.target.value);
    }

    return (
        <div className="question">
            <div className="questionBox">
                <p>{question}</p>
            </div>
            <form className="inputBox" onSubmit={onSubmit}>
                <textarea onChange={onChange} value={answer} placeholder={placeholder} rows="8" cols="60"/><br />
                <input className="submit" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default TextBoxQuestion
