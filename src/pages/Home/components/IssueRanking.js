import React from "react";
import "../../../styles/Home/components/IssueRanking.scss";


const IssueRanking = () => {
    return (
        <div className="issueRanking-ranking">
            <div className="issueRanking-item">
                <div className="issueRanking-num">1</div>
                <div className="issueRanking-title">🌳 폐건전지 수거를 위한 지역별 수거함을 만들어주세요.</div>
                <div className="issueRanking-up">10🔥</div>
                <div className="issueRanking-change up">▲1</div>
            </div>
            <div className="issueRanking-item">
                <div className="issueRanking-num">2</div>
                <div className="issueRanking-title">🗑 성인물.도박광고 홍보 사이트 **** 폐쇄를 요청합니다.</div>
                <div className="issueRanking-up">7🔥</div>
                <div className="issueRanking-change down">▼1</div>
            </div>
            <div className="issueRanking-item">
                <div className="issueRanking-num">3</div>
                <div className="issueRanking-title">🎁 배우 000가 인성논란에 휩싸이지 않도록 돕고 싶습니다(인증합니다)</div>
                <div className="issueRanking-up">4🔥</div>
                <div className="issueRanking-change none">-</div>
            </div>
            <div className="issueRanking-item">
                <div className="issueRanking-num">4</div>
                <div className="issueRanking-title">💡 카페 종이빨대 저만 별로인가요?</div>
                <div className="issueRanking-up">4🔥</div>
                <div className="issueRanking-change up">▲1</div>
            </div>
            <div className="issueRanking-item">
                <div className="issueRanking-num">5</div>
                <div className="issueRanking-title">📚 담임의 실수로 수능을 못치르게 된 ** **고등학교 3학년 학부모입니다.</div>
                <div className="issueRanking-up">2🔥</div>
                <div className="issueRanking-change up">▲1</div>
            </div>
        </div>
    )
}

export default IssueRanking;