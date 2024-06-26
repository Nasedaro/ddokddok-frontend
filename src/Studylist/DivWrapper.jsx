import React from 'react';
import { useNavigate } from 'react-router-dom';

const DivWrapper = ({ className, title, image, studyId }) => {
    const imageUrl = `http://localhost:8080/${image}`;
    const Navigate = useNavigate();

    const handleClick = () => {
        // 클릭 시 스터디 상세 페이지로 이동하는 코드
        Navigate(`/study/${studyId}`);
    };

    return (
        <div className={`div-wrapper ${className}`} onClick={handleClick}>
            <img src={imageUrl} alt="Web Sample" />
            <div className="div-wrapper-text">{title}</div>
        </div>
    );
};

export default DivWrapper;
