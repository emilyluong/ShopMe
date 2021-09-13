import React, { useState } from 'react'

const SingleQuestion = ({ websiteInfo, question, placeholder, resultName, setWebsiteInfo }) => {
    const [answer, setAnswer] = useState("");
    
    //prob also need to pass in the setState for websiteInfo
    const onSubmit = () => {
        const nextQuestion = websiteInfo.questionNumber += 1;
        if (resultName === "url_extension") setWebsiteInfo({ ...websiteInfo, [resultName]: answer.toLowerCase(), questionNumber: nextQuestion });
        else setWebsiteInfo({ ...websiteInfo, [resultName]: answer, questionNumber: nextQuestion });
        console.log(websiteInfo);
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
                <input type="text" onChange={onChange} value={answer} placeholder={placeholder} /><br />
                <input className="submit" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SingleQuestion
