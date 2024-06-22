import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const QnaPage = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true); // 로딩 상태 추가
    const [filters, setFilters] = useState({
        keyword: '',
        tagId: '',
        sort: 'asc',
        page: 1,
        perPage: 10,
    }); // 필터 상태 추가

    const fetchQuestions = async () => {
        try {
            const response = await axios.get('http://localhost:8080/question/list', {
                params: filters,
            });
            console.log('Fetched questions:', response.data); // 데이터 로그 확인
            setQuestions(response.data);
            setLoading(false); // 데이터 받아온 후 로딩 상태 해제
        } catch (error) {
            console.error('Error fetching questions:', error);
            setLoading(false); // 에러 발생 시도 로딩 상태 해제
            // Handle error (e.g., show error message)
        }
    };

    useEffect(() => {
        fetchQuestions();
    }, [filters]); // 필터 변경 시 fetchQuestions 재실행

    const handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="qn-a">
            <div className="div">
                <div className="line"></div>
                <div className="overlap">
                    <img className="search-hovering" alt="Search" src="search-icon.png" />
                    <div className="text-wrapper">검색</div>
                </div>
                <div className="qna-list">
                    {questions.map((question) => (
                        <QnAItem
                            key={question.question_id}
                            title={question.title}
                            author={question.member_id} // 예시로 작성된 데이터가 member_id를 작성했습니다. 추후 수정 가능합니다.
                            answerCount={0} // 답변 개수는 API에 따라 추가할 수 있습니다.
                            tags={[]} // 태그 정보는 API에 따라 추가할 수 있습니다.
                            content={question.content}
                        />
                    ))}
                </div>
                <div className="navigation">
                    <div className="nav-item">이전</div>
                    <div className="page-info">
                        {filters.page} / {Math.ceil(questions.length / filters.perPage)}
                    </div>
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

export default QnaPage;
