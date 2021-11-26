import React from "react";
import {NavLink} from "react-router-dom";
import "../../../styles/Issue/components/IssueCreateTitle.scss";


const IssueCreateTitle = (props) => {
    const handleTitle = async (e) => {
        await props.setTitle(e.target.value);
        props.setIsNextStep(prev => !prev);
        // console.log(props.title);
    }

    return (
        <>
            <div className="issueCreate-step-wrap">
                <div className="issueCreate-step checked">제목</div>
                <div className="issueCreate-step-link"/>
                <div className="issueCreate-step">내용</div>
                <div className="issueCreate-step-link"/>
                <div className="issueCreate-step">분류</div>
            </div>
            <div className="issueCreateTitle-wrap">
                <div className="issueCreate-guide">이슈화하고자 하는 글의 제목을 입력해주세요.</div>
                <input className="issueCreateTitle-input"
                       type="text" value={props.title} onChange={handleTitle} placeholder="50 글자 이내로 입력해주세요"/>
            </div>
            <div className="issueCreate-next-wrap">
                <NavLink to="/issue/create/contents/" className="issueCreate-next">계속하기</NavLink>
            </div>
        </>
    )
}

export default IssueCreateTitle;