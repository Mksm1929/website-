import { memo } from "react";


interface ArrowButtonProps {
    direction: "prev" | "next";
    onClick: () => void;
    ariaLabel: string;
    className?: string;
}

export const ArrowButton = memo(({ direction, onClick, ariaLabel, className }: ArrowButtonProps) => {
    
    console.log('ArrowButton mounted/updated');

    return (
        <>
            <button
                className={`arrow-button arrow-button-${direction} ${className}`}
                onClick={onClick}
                aria-label={ariaLabel}
            >
                {direction === "prev" ? '‹' : '›'}
            </button>
        </>
    )
})