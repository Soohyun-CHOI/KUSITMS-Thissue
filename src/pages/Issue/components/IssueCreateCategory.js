import React from "react";
import {categories} from "../../Common";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {NavLink} from "react-router-dom";
import "../../../styles/Issue/components/IssueCreateCategory.scss"

const IssueCreateTitle = (props) => {
    const categoryArray = categories;

    const handleCategory = (categoryId) => {
        props.setCategory(categoryId);
        props.setIsNextStep(prev => !prev);
        // console.log(props.category);
    }

    return (
        <>
            <div className="issueCreate-step-wrap">
                <div className="issueCreate-step">✔️</div>
                <div className="issueCreate-step-link"/>
                <div className="issueCreate-step">✔️</div>
                <div className="issueCreate-step-link"/>
                <div className="issueCreate-step checked">분류</div>
            </div>
            <div className="issueCreate-guide">글의 카레고리를 설정해주세요.</div>
            <div className="issueCreate-category-wrap">
                {categoryArray.map(category =>
                    <button className="issueCreate-category"
                            onClick={() => handleCategory(category.id)}>
                        {category.emoji}{category.koreanName}
                    </button>
                )}
            </div>
            <div className="issueCreate-next-wrap">
                <Popup trigger={<div className="issueCreate-next trigger">이슈 등록하기</div>}
                       className="popup-create-issue"
                       modal>
                    {close => (
                        <>
                            <div className="issueCreate-popup-header" onClick={() => close()}>✕</div>
                            <div className="issueCreate-popup-title">이슈를 등록하시겠습니까?</div>
                            <div className="issueCreate-popup-contents">
                                허위사실이나 명예훼손 글을 작성한 경우<br/>법적인 처벌을 받을 수 있습니다.
                            </div>
                            <div className="issueCreate-popup-buttons">
                                <button className="issueCreate-popup-button cancel"
                                        onClick={() => {
                                            close()
                                        }}>
                                    돌아가기
                                </button>
                                <NavLink to="/"
                                         className="issueCreate-popup-button submit"
                                         onClick={() => props.createIssue(
                                             props.title,
                                             props.contents,
                                             props.hashtag,
                                             props.category,
                                             props.author,
                                             true)}>
                                    네, 확인하였습니다.
                                </NavLink>
                            </div>
                        </>
                    )}
                </Popup>
            </div>
        </>
    )
}

export default IssueCreateTitle;