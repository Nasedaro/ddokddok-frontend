import React from 'react';
import './style.css';

// 질문과 답변을 표시하는 컴포넌트
const QnAItem = ({ title, author, answerCount, tags, content }) => (
    <div className="qna-item">
        <img className="avatar" alt="Avatar" src="AM-00-14.png" />
        <div className="author">{author}</div>
        <div className="answer-info">
            <div className="answer-label">답변</div>
            <div className="answer-count">{answerCount}</div>
            <img className="developer-icon-man" alt="Developer icon" src="developer-icon-man-1.png" />
        </div>
        <div className="tags">
            {tags.map((tag, index) => (
                <div key={index} className="tag">
                    #{tag}
                </div>
            ))}
        </div>
        <div className="title">{title}</div>
        <p className="content">{content}</p>
    </div>
);

// 태그를 표시하는 컴포넌트
const Tag = ({ text }) => <div className="tag">{text}</div>;

const QnA = () => {
    return (
        <div className="qn-a">
            <div className="div">
                <div className="line"></div>
                <div className="overlap">
                    <img className="search-hovering" alt="Search" src="search-icon.png" />
                    <div className="text-wrapper">검색</div>
                </div>
                <div className="qna-list">
                    <QnAItem
                        title="PHP require 경로가 이상합니다."
                        author="장림동매콤주먹"
                        answerCount={0}
                        tags={['경로', 'php']}
                        content="C:\Program Files\Apache24\php\web\controller\regist.php C위에 경로를 참고해서 제가 regist.php에서 database.php를 require 하려고 하는데요. &#34;../database.php&#34; 라고 해야할거 같은데 안되고.. 이..."
                    />

                    <QnAItem
                        title="파이썬 람다 개발"
                        author="채승지빵야빵야"
                        answerCount={1}
                        tags={['람다']}
                        content="안녕하세요 새로 프로젝트 들어가면서 파이썬으로 람다를 개발하게 되었습니다. 이렇게 개발하는 건 처음이라 환경잡는 부분이 막히는데, 공부한 바로는 람다개발을 AWS 웹페이지 상에서 하더라고요. 그런데 프..."
                    />

                    <QnAItem
                        title="C언어 동적할당 질문있습니다."
                        author="정쥐우개"
                        answerCount={6}
                        tags={['C']}
                        content="cs50이라는 cs강의를 듣다가 강의에서 교육편의를 위해 사용하던 함수가 궁금하여 직접 구현해보았습니다. 입력한 문자열을 동적할당하여 주소를 반환하는 get_string&nbsp;&nbsp;함수 입니다. 그런데 원래 동적할당할 때..."
                    />

                    <QnAItem
                        title="iOS Third-Party Framework에 privacy manifest 추가할 수 있나요 ?"
                        author="지우맘"
                        answerCount={0}
                        tags={['경로', 'php']}
                        content="안녕하세요, iOS 개발 중 질문이 있어 문의드립니다. 현재 제 앱에서 Facebook SDK를 사용하고 있는데요, 제한적 로그인 이슈로 인해서 16.x.x 버전으로 빌드를 진행하고 싶은데 privacy manifest 때문에 아..."
                    />

                    <QnAItem
                        title="리액트 Nginx 배포 오류 제발 살려주세요"
                        author="나세환상"
                        answerCount={3}
                        tags={['reactjs', 'nginx', 'aws클라우드']}
                        content="리액트로 프론트를 구성하고 백은 스프링부트로 만드는 팀플젝을 진행중입니다. web RTC 기술을 Janus 서버도 제공받아서 webRTC에 대해 자세히는 모르지만 화상채팅도 구현을 해서 로컬에서는 제대로 정상..."
                    />
                </div>
                <div className="navigation">
                    <div className="nav-item">이전</div>
                    <div className="page-info">1 / 1</div>
                    <div className="nav-item">다음</div>
                </div>
            </div>
            <div className="popular-tags">
                <div className="tag-title">#인기 태그</div>
                <Tag text="#채승지" />
                <Tag text="#Kubernetes" />
                <Tag text="#Docker" />
            </div>
        </div>
    );
};

export default QnA;
