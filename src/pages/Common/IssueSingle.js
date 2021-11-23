import React from "react";

const IssueSingle = (props) => {
    const hashtagArray = props.hashtag.split(",");

    return (
        <div className="ISSUESINGLE">
            <div className="issueSingle-date">{props.date}</div>
            <div className="issueSingle-icon">{props.emoji}</div>
            <div className="issueSingle-title">{props.title}</div>
            <div className="issueSingle-footer">
                <div className="issueSingle-hashtag-warp">
                    {hashtagArray.map(hashtag =>
                        <div className="issueSingle-hashtag">{hashtag}</div>
                    )}
                </div>
                <div className="issueSingle-upNums">{props.upNums}</div>
            </div>
        </div>
    )
}

export default IssueSingle;