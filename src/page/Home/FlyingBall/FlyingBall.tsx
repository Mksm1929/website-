import "./FlyingBall.css";
import { useState, useEffect, useRef, useCallback } from 'react';

export const FlyingBall = () => {
    const [colorIndex, setColorIndex] = useState(0);
    const [isBurst, setIsBurst] = useState(false);
    const [burstPosition, setBurstPosition] = useState({ x: 0, y: 0 });
    const [isAnimating, setIsAnimating] = useState(true);
    
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const lvlRef = useRef(1)
    const positionRef = useRef({ x: 100, y: 100 });
    const velocityRef = useRef({ x: 3, y: 3 });
    const requestRef = useRef<number | null>(null);

    const colors = [
        '#ffffffff', '#5e5e5eff', '#bebebeff', '#353535ff',
        '#494949ff', '#919191ff', '#353535ff', '#949494ff'
    ];

    const getRandomPosition = useCallback(() => {
        if (!containerRef.current || !textRef.current) return { x: 100, y: 100 };

        const container = containerRef.current;
        const textElement = textRef.current;
        
        const containerRect = container.getBoundingClientRect();
        const textRect = textElement.getBoundingClientRect();

        const maxX = containerRect.width - textRect.width;
        const maxY = containerRect.height - textRect.height;

        return {
            x: Math.floor(Math.random() * maxX),
            y: Math.floor(Math.random() * maxY)
        };
    }, []);

    const initializeVelocity = useCallback((velocity: number) => {
        // Случайное направление движения
        const randomVx = Math.random() > 0.5 ? velocity : -velocity;
        const randomVy = Math.random() > 0.5 ? velocity : -velocity;
        velocityRef.current = { x: randomVx, y: randomVy };
    }, []);

const animate = useCallback(() => {
        if (!containerRef.current || !textRef.current || !isAnimating) return;

        const container = containerRef.current;
        const textElement = textRef.current;

        const containerRect = container.getBoundingClientRect();
        const textRect = textElement.getBoundingClientRect();

        let { x, y } = positionRef.current;
        let { x: vx, y: vy } = velocityRef.current;

        x += vx;
        y += vy;

        let colorChanged = false;

        if (x <= 0) {
            x = 0;
            vx = Math.abs(vx); 
            colorChanged = true;
        } else if (x + textRect.width >= containerRect.width) {
            x = containerRect.width - textRect.width;
            vx = -Math.abs(vx); 
            colorChanged = true;
        }

        if (y <= 0) {
            y = 0;
            vy = Math.abs(vy); 
            colorChanged = true;
        } else if (y + textRect.height >= containerRect.height) {
            y = containerRect.height - textRect.height;
            vy = -Math.abs(vy); 
            colorChanged = true;
        }

        positionRef.current = { x, y };
        velocityRef.current = { x: vx, y: vy };

        textElement.style.left = `${x}px`;
        textElement.style.top = `${y}px`;

        if (colorChanged) {
            setColorIndex(prev => (prev + 1) % colors.length);
        }

        requestRef.current = requestAnimationFrame(animate);
    }, [colors.length, isAnimating]);

    const burstBall = useCallback((event: React.MouseEvent) => {
        if (!textRef.current || !isAnimating) return;
        
        const rect = textRef.current.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;
        
        // Сохраняем позицию клика для анимации лопанья
        setBurstPosition({ x: clickX, y: clickY });
        setIsBurst(true);
        setIsAnimating(false);
        
        // Останавливаем анимацию движения
        if (requestRef.current) {
            cancelAnimationFrame(requestRef.current);
            requestRef.current = null;
        }

        // Через 500 мс создаем новый шарик
        setTimeout(() => {
            const newPos = getRandomPosition();
            positionRef.current = newPos;
            setColorIndex(prev => (prev + 1) % colors.length);
            setIsBurst(false);
            setIsAnimating(true);
            
            // Перезапускаем анимацию
            initializeVelocity(lvlRef.current);
            lvlRef.current += 1;
            if (containerRef.current) {
                requestRef.current = requestAnimationFrame(animate);
            }
        }, 500);
        
        // Предотвращаем всплытие события
        event.stopPropagation();
    }, [animate, getRandomPosition, initializeVelocity, isAnimating, colors.length]);

    

    useEffect(() => {
        // Инициализируем случайную позицию при первом рендере
        const initialPos = getRandomPosition();
        positionRef.current = initialPos;
        
        initializeVelocity(lvlRef.current);
        if (isAnimating) {
            requestRef.current = requestAnimationFrame(animate);
        }

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [animate, initializeVelocity, getRandomPosition, isAnimating]);

    return (
        <div ref={containerRef} className="dvd-container">
            <div 
                ref={textRef}
                className={`dvd-text ${isBurst ? 'burst' : ''}`}
                style={{
                    left: `${positionRef.current.x}px`,
                    top: `${positionRef.current.y}px`,
                    color: colors[colorIndex],
                    '--burst-x': `${burstPosition.x}px`,
                    '--burst-y': `${burstPosition.y}px`,
                } as React.CSSProperties}
                onClick={burstBall}
            >
                {isBurst && (
                    <div className="burst-particles">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="burst-particle" />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};