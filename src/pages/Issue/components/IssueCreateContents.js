import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import "../../../styles/Issue/components/IssueCreateContents.scss"

const IssueCreateContents = (props) => {
    const [hashtag1, setHashtag1] = useState([]);
    const [hashtag2, setHashtag2] = useState([]);
    const [hashtag3, setHashtag3] = useState([]);
    const [hashtag4, setHashtag4] = useState([]);
    const [hashtag5, setHashtag5] = useState([]);

    const handleContents = (e) => {
        props.setContents(e.target.value);
        props.setIsNextStep(prev => !prev);
        // console.log(props.contents);
    }

    const handleHashtag = async () => {
        await props.setHashtag([{"hashtag": hashtag1}, {"hashtag": hashtag2}, {"hashtag": hashtag3}, {"hashtag": hashtag4}, {"hashtag": hashtag5}]);
        props.setIsNextStep(prev => !prev);
        // console.log(props.hashtag);
    }

    const handleHashtag1 = (e) => {
        setHashtag1(e.target.value);
    }

    const handleHashtag2 = (e) => {
        setHashtag2(e.target.value);
    }

    const handleHashtag3 = (e) => {
        setHashtag3(e.target.value);
    }
    const handleHashtag4 = (e) => {
        setHashtag4(e.target.value);
    }
    const handleHashtag5 = (e) => {
        setHashtag5(e.target.value);
    }

    return (
        <>
            <div className="issueCreate-step-wrap">
                <div className="issueCreate-step">✔️</div>
                <div className="issueCreate-step-link"/>
                <div className="issueCreate-step checked">내용</div>
                <div className="issueCreate-step-link"/>
                <div className="issueCreate-step">분류</div>
            </div>
            <div className="issueCreate-guide">글의 내용을 작성해주세요.</div>
            <div className="issueCreate-contents-hashtag-wrap">
                <div className="issueCreate-contents-hashtag">
                    #<input type="text" value={hashtag1} onChange={handleHashtag1}/>
                </div>
                <div className="issueCreate-contents-hashtag">
                    #<input type="text" value={hashtag2} onChange={handleHashtag2}/>
                </div>
                <div className="issueCreate-contents-hashtag">
                    #<input type="text" value={hashtag3} onChange={handleHashtag3}/>
                </div>
                <div className="issueCreate-contents-hashtag">
                    #<input type="text" value={hashtag4} onChange={handleHashtag4}/>
                </div>
                <div className="issueCreate-contents-hashtag">
                    #<input type="text" value={hashtag5} onChange={handleHashtag5}/>
                </div>
            </div>

            <div className="issueCreate-contents-input">
                <textarea value={props.contents} onChange={handleContents}/>
            </div>

            <div className="issueCreate-next-wrap">
                <NavLink to="/issue/create/category/"
                         className="issueCreate-next"
                         onClick={handleHashtag}>계속하기</NavLink>
            </div>
        </>
    )
}

export default IssueCreateContents;