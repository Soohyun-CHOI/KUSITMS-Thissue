import React, {useEffect, useState} from "react";
import {Header, PopupLogin} from "../Common";
import {NavLink} from "react-router-dom";
import Popup from "reactjs-popup";
import "../../styles/Issue/IssueDetail.scss";

import {getCategoryEmoji} from "../../utils/Utils";
import axios from "axios";

const IssueDetail = (props) => {
    const [issue, setIssue] = useState({});
    const [issues, setIssues] = useState([]);
    const [authInfo, setAuthInfo] = useState({});
    const [isUped, setIsUped] = useState(false);
    // console.log(props.match.id);

    useEffect(() => {
        init();
    }, [isUped]);

    // useEffect(() => {
    //     axios.get(`http://localhost:5000/api/issue/${match.params.id}`).then(response => {
    //         // setIssues(response.data);
    //         console.log(response.data);
    //         console.log(match);
    //     })
    // }, [isUped]);

    const init = async () => {
        // const data = await getApi(`issue/${match.params.id}/`);
        // setIssue(data.results);

        // 서버 연결 후 아래 코드는 삭제
        const issueTest = {
            issueId: 1,
            issueAuthor: "정현수",
            issueTitle: "제 반려견 링컨이의 억울함을 풀어주세요",
            issueContents: "2021년 10월 4일 옥수동에 있는 옥수종합사회복지관과 가까운 저희 집에서 제 소유로 마이크로칩이 등록된 4살 푸들 링컨이를 잃어버렸습니다.\n" +
                "\n" +
                "저는 3주에서 한달동안 링컨이를 잃어버린지 알고 전단지 붙이면서 찾아다녔는데 cctv를 보니 제가 외출한 사이 트렁크에서 이동가방을 꺼내 엄마의 손짓을 받고 저희 집쪽으로 들어가 무언가 들어가 있는 묵직한 가방과 서류를 들고 나오는 모습을 보게 되었습니다.\n" +
                "잃어버린 후 엄마는 1,2주동안 같이 전단지를 붙이며 같이 찾아다녔다는 생각이 들고 배신감이 엄청 큰 상태입니다.\n" +
                "\n" +
                "cctv를 본 후 엄마와 대화를 시도했으나 가족을 위해 장례를 치뤘다 라고 하시고 살아있는 강아지를 엄마말로는 일방적 처분(안락사)하셨다고 추정됩니다..\n" +
                "저는 대화도 3주 동안 진실을 알기 위해 꾸준히 물어봤었지만 cctv를 본 후 얘기가 나오게 되어 강아지의 생사여부를 직접 확인 하고자 경찰서에 신고를 했습니다.\n" +
                "\n" +
                "여러분들의 도움이 절실히 필요합니다.\n",
            issueCategory: 2,
            issueHashtag: ["링컨이", "반려동물", "찾아주세요", "강아지", "도와주세요"],
            issueDate: "2020-11-27",
            issueModifiedDate: "2021-11-27",
            issueUps: ["사람1", "2", "3", "4", "5", "6", "7"]
        }

        setIssue(issueTest);

        axios.get("http://localhost:5000/api/issue").then(response => {
            setIssues(response.data);
        })

        axios.get("/api/issue/tokenTest/test").then(response => {
            setAuthInfo(response.data);
            console.log(response.data)
            setIsUped((issue.issueUps || []).includes(authInfo));
        })
    }

    const doUp = async () => {
        // await postApi
        console.log("이슈 업");
        setIsUped(prev => !prev);
    }

    const undoUp = async () => {
        // await
        console.log("이슈 업 취소");
        setIsUped(prev => !prev);
    }

    const getSimilarIssues = (currentId, categoryId) => {
        return issues.filter(issue => issue.issueCategory === categoryId && issue.issueId !== currentId).slice(0, 5);
    }

    return (
        <>
            <Header/>
            {!issue ? <div>로딩중...</div> :
                <>
                    <div className="issueDetail-mintbg"/>
                    <div className="issueDetail-bg">
                        <div className="issueDetail-left">
                            <div className="issueDetail-hashtag-wrap">
                                {(issue.issueHashtag || []).map(hashtag =>
                                    <NavLink to="">
                                        <div className="issueDetail-hashtag">#{hashtag}</div>
                                    </NavLink>)}
                            </div>
                            <div className="issueDetail-title">{issue.issueTitle}</div>
                            <div className="issueDetail-contents">{issue.issueContents}</div>
                            <div className="issueDetail-footer">
                                작성자 {issue.issueAuthor} | 작성일 {issue.issueDate} | 수정일: {issue.issueModifiedDate}
                            </div>

                            <div className="issueDetail-bottom">
                                <div className="issueDetail-bottom-left">
                                    <PopupLogin trigger={<button>🔥</button>}/>
                                    <div className="text">이슈 업!</div>
                                    <div>0</div>
                                </div>
                                <div className="issueDetail-bottom-right">
                                    <div className="issueDetail-bottom-right-header">
                                        {((issue.issueUps || []).length > 5) ?
                                            <div className="issueDetail-up-wrap">
                                                <div className="issueDetail-bottom-title">업! 한 사람들</div>
                                                <div className="issueDetail-ups">
                                                    아직 업한 사람이 없습니다. 첫 번째로 업!을 해주세요🔥
                                                    {/*{(issue.issueUps || []).slice(0, 4).map(up =>*/}
                                                    {/*    <div className="issueDetail-up">{up}</div>)}*/}
                                                    {/*<Popup className="popup-plus" trigger={<div className="plus">+</div>} modal>*/}
                                                    {/*    {close => (*/}
                                                    {/*        <>*/}
                                                    {/*            <div className="close" onClick={() => close()}>✕</div>*/}
                                                    {/*            <div className="popup-title">업한 사람들</div>*/}
                                                    {/*            <div className="popup-up-wrap">*/}
                                                    {/*            {issue.issueUps.map(up =>*/}
                                                    {/*                <div className="issueDetail-up">{up}</div>)}*/}
                                                    {/*            </div>*/}
                                                    {/*        </>*/}
                                                    {/*    )}*/}
                                                    {/*</Popup>*/}
                                                </div>
                                            </div> :
                                            <div className="issueDetail-ups">
                                                {(issue.issueUps || []).map(up =>
                                                    <div className="issueDetail-up">{up}</div>)}
                                            </div>
                                        }
                                        <div className="issueDetail-share">공유</div>
                                    </div>
                                    <div className="issueDetailGraph">
                                        <div className="issueDetail-bottom-title">업! 사용자 통계</div>
                                        30명 이상이 이슈 업! 시 사용자 통계를 확인할 수 있어요.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="issueDetail-right">
                            <div className="issueDetail-right-title">유사한 이슈도 함께 봐요!</div>
                            <div className="issueDetail-right-box">
                                {getSimilarIssues(issue.issueId, issue.issueCategory).map(similarIssue =>
                                    <NavLink
                                        to={`/issue/${similarIssue.issueId}`}>
                                        <div className="issueDetail-similar">{getCategoryEmoji(similarIssue.issueCategory)} {similarIssue.issueTitle}</div>
                                    </NavLink>)}
                            </div>
                            <div className="issueDetail-right-title margin">이런 이슈는 어때요?</div>
                            <div className="issueDetail-right-box">
                                {issues.slice(0, 4).map(issue =>
                                    <NavLink
                                        to={`/issue/${issue.issueId}`}>
                                        <div className="issueDetail-similar">{getCategoryEmoji(issue.issueCategory)} {issue.issueTitle.slice(0, 21)}...</div>
                                    </NavLink>)}
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default IssueDetail;