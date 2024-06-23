import React, { useState } from 'react';
import './style.css';

const CategoryList = () => {
    const [iconPosition, setIconPosition] = useState(0);

    const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];

    const moveIcons = (direction) => {
        const increment = direction === 'left' ? -100 : 100;
        setIconPosition((prevPosition) => prevPosition + increment);
    };

    return (
        <div className="category-list">
            <div className="icon-container" style={{ transform: `translateX(${iconPosition}px)` }}>
                {/* 카테고리 아이콘들 */}
                {categories.map((category, index) => (
                    <div key={index} className="component">
                        {category}
                    </div>
                ))}
            </div>
            <div className="button-container">
                <button onClick={() => moveIcons('left')}>←</button>
                <button onClick={() => moveIcons('right')}>→</button>
            </div>
        </div>
    );
};

export default CategoryList;
