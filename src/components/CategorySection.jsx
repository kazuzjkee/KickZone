import React from 'react';
import CategoryCard from './CategoryCard';

const CategorySection = () => {
    return (
        <div className="categories">
            <CategoryCard title="Мужчинам" image="https://albione.ru/images/03-05-23-03.jpg" link="/men"/>
            <CategoryCard title="Женщинам" image="https://sneakerhead.ru/images/news/380126/tild3237-3961-4139-b566-303136383034__jenselter_23969695_5.jpg" link="/women"/>
            <CategoryCard title="Детям" image="https://img.freepik.com/free-photo/close-up-cute-child-portrait_23-2149153310.jpg" link="/kids"/>
        </div>
    )
}

export default CategorySection