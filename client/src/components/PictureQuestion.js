import React, { useState } from 'react'

const PictureQuestion = ({ websiteInfo, question, placeholder, resultName, setWebsiteInfo }) => {
    const [image, setImage] = useState(null);
    
    //prob also need to pass in the setState for websiteInfo
    const onSubmit = () => {
        if (image != null) {
            if (resultName === 'gallery')
                setWebsiteInfo(websiteInfo => {
                    return { ...websiteInfo, [resultName]: [...websiteInfo[resultName], image], questionNumber: websiteInfo.questionNumber+1 }
                });
            else
                setWebsiteInfo(websiteInfo => {
                    return { ...websiteInfo, [resultName]: image, questionNumber: websiteInfo.questionNumber+1 }
                });
        }
    }

    const onChange = (e) => {
        setImage(e.target.files[0]);
    }

    return (
        <div className="question">
            <div className="questionBox">
                <p>{question}</p>
            </div>
            <div className="inputBox">
                <input id="uploadPhoto" type="file" onChange={onChange} /><br />
                <input className="submit" type="submit" value="Upload" onClick={onSubmit}/>
            </div>
        </div>
    )
}

export default PictureQuestion
