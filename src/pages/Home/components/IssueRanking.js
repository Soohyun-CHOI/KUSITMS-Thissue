import React from "react";
import "../../../styles/Home/components/IssueRanking.scss";


const IssueRanking = () => {
    return (
        <div className="issueRanking-ranking">
            <div className="issueRanking-item">
                <div className="issueRanking-num">1</div>
                <div className="issueRanking-title">남양주에서 진행 중인 불법 도축을 막아주세요.</div>
                <div className="issueRanking-up">10🔥</div>
                <div className="issueRanking-change up">▲1</div>
            </div>
            <div className="issueRanking-item">
                <div className="issueRanking-num">2</div>
                <div className="issueRanking-title">남양주에서 진행 중인 불법 도축을 막아주세요.</div>
                <div className="issueRanking-up">10🔥</div>
                <div className="issueRanking-change down">▼1</div>
            </div>
            <div className="issueRanking-item">
                <div className="issueRanking-num">3</div>
                <div className="issueRanking-title">남양주에서 진행 중인 불법 도축을 막아주세요.</div>
                <div className="issueRanking-up">10🔥</div>
                <div className="issueRanking-change none">-</div>
            </div>
            <div className="issueRanking-item">
                <div className="issueRanking-num">4</div>
                <div className="issueRanking-title">남양주에서 진행 중인 불법 도축을 막아주세요.</div>
                <div className="issueRanking-up">10🔥</div>
                <div className="issueRanking-change up">▲1</div>
            </div>
            <div className="issueRanking-item">
                <div className="issueRanking-num">5</div>
                <div className="issueRanking-title">남양주에서 진행 중인 불법 도축을 막아주세요.</div>
                <div className="issueRanking-up">10🔥</div>
                <div className="issueRanking-change up">▲1</div>
            </div>
        </div>
    )
}

export default IssueRanking;