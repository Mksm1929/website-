import "./FlyingBall.css";
import { useState, useEffect, useRef, useCallback } from 'react';

export const FlyingBall = () => {
    const [colorIndex, setColorIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    const positionRef = useRef({ x: 100, y: 100 });
    const velocityRef = useRef({ x: 3, y: 2 });
    const requestRef = useRef<number | null>(null);

    const colors = [
        '#ffffffff', '#5e5e5eff', '#bebebeff', '#353535ff',
        '#494949ff', '#919191ff', '#353535ff', '#949494ff'
    ];

    const initializeVelocity = useCallback(() => {
        velocityRef.current = { x: 1, y: 1 };
    }, []);

    const animate = useCallback(() => {
        if (!containerRef.current || !textRef.current) return;

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
    }, [colors.length]);

    useEffect(() => {
        initializeVelocity();
        requestRef.current = requestAnimationFrame(animate);

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [animate, initializeVelocity]);


    return (
        <div ref={containerRef} className="dvd-container">
            <div ref={textRef}
                className="dvd-text"
                style={{
                    left: `${positionRef.current.x}px`,
                    top: `${positionRef.current.y}px`,
                    color: colors[colorIndex],
                }}>
                {"</>"}
            </div>
        </div>
    )
}