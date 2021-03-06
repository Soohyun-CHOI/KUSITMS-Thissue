import React from "react";
import "../../../styles/Home/components/IssueRanking.scss";


const IssueRanking = () => {
    return (
        <div className="issueRanking-ranking">
            <div className="issueRanking-item">
                <div className="issueRanking-num">1</div>
                <div className="issueRanking-title">π³ νκ±΄μ μ§ μκ±°λ₯Ό μν μ§μ­λ³ μκ±°ν¨μ λ§λ€μ΄μ£ΌμΈμ.</div>
                <div className="issueRanking-up">10π₯</div>
                <div className="issueRanking-change up">β²1</div>
            </div>
            <div className="issueRanking-item">
                <div className="issueRanking-num">2</div>
                <div className="issueRanking-title">π μ±μΈλ¬Ό.λλ°κ΄κ³  νλ³΄ μ¬μ΄νΈ **** νμλ₯Ό μμ²­ν©λλ€.</div>
                <div className="issueRanking-up">7π₯</div>
                <div className="issueRanking-change down">βΌ1</div>
            </div>
            <div className="issueRanking-item">
                <div className="issueRanking-num">3</div>
                <div className="issueRanking-title">π λ°°μ° 000κ° μΈμ±λΌλμ ν©μΈμ΄μ§ μλλ‘ λκ³  μΆμ΅λλ€(μΈμ¦ν©λλ€)</div>
                <div className="issueRanking-up">4π₯</div>
                <div className="issueRanking-change none">-</div>
            </div>
            <div className="issueRanking-item">
                <div className="issueRanking-num">4</div>
                <div className="issueRanking-title">π‘ μΉ΄ν μ’μ΄λΉ¨λ μ λ§ λ³λ‘μΈκ°μ?</div>
                <div className="issueRanking-up">4π₯</div>
                <div className="issueRanking-change up">β²1</div>
            </div>
            <div className="issueRanking-item">
                <div className="issueRanking-num">5</div>
                <div className="issueRanking-title">π λ΄μμ μ€μλ‘ μλ₯μ λͺ»μΉλ₯΄κ² λ ** **κ³ λ±νκ΅ 3νλ νλΆλͺ¨μλλ€.</div>
                <div className="issueRanking-up">2π₯</div>
                <div className="issueRanking-change up">β²1</div>
            </div>
        </div>
    )
}

export default IssueRanking;