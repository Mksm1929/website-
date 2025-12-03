import { useCallback, useState } from 'react';
import "./Carousel.css";
import { ArrowButton } from './ArrowButton';


export interface Slide {
    id: string;
    src: string;
    alt: string;
    title?: string;
};

interface SimpleSliderProps {
    slides: Slide[];
};

export const SimpleSlider = ({
    slides,
}: SimpleSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const goToPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    const goToSlide = useCallback((index: number) => {
        setCurrentIndex(index);
    }, []);

    return (
        <div className="simple-slider">
            <div className="slider-container">
                <>
                    <ArrowButton direction="prev" className="prev" onClick={goToPrev} ariaLabel="Предыдущий слайд" />
                    <ArrowButton direction="next" className="next" onClick={goToNext} ariaLabel="Следующий слайд" />
                </>
                <div className="slides-wrapper">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id + Date.now()}
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
                            key={index + Date.now()}
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