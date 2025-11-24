import React, { useState } from 'react';
import "./Carousel.css";


export interface Slide {
    id: string;
    src: string;
    alt: string;
    title?: string;
}

interface SimpleSliderProps {
    slides: Slide[];
}

export const SimpleSlider: React.FC<SimpleSliderProps> = ({
    slides
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="simple-slider">
            <div className="slider-container">
                <>
                    <button
                        className="slider-arrow slider-arrow-prev"
                        onClick={goToPrev}
                        aria-label="Предыдущий слайд"
                    >
                        ‹
                    </button>
                    <button
                        className="slider-arrow slider-arrow-next"
                        onClick={goToNext}
                        aria-label="Следующий слайд"
                    >
                        ›
                    </button>
                </>
                <div className="slides-wrapper">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`slide ${index === currentIndex ? 'active' : ''}`}
                        >
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                className="slide-image"
                            />
                            {slide.title && (
                                <div className="slide-title">
                                    <h3>{slide.title}</h3>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="slider-dots">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Перейти к слайду ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};