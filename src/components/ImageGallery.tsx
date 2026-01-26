import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import './ImageGallery.css';

interface ImageGalleryProps {
    images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = useCallback(() => {
        setCurrentIndex(null);
        document.body.style.overflow = 'auto';
    }, []);

    const showNext = useCallback(() => {
        if (currentIndex !== null) {
            setCurrentIndex((prevIndex) => (prevIndex! + 1) % images.length);
        }
    }, [currentIndex, images.length]);

    const showPrev = useCallback(() => {
        if (currentIndex !== null) {
            setCurrentIndex((prevIndex) => (prevIndex! - 1 + images.length) % images.length);
        }
    }, [currentIndex, images.length]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (currentIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex, closeLightbox, showNext, showPrev]);

    return (
        <div className="image-gallery-container">
            <div className="gallery-grid">
                {images.map((url, index) => (
                    <div key={index} className="gallery-thumbnail-wrapper" onClick={() => openLightbox(index)}>
                        <img src={url} alt={`Gallery ${index + 1}`} className="gallery-thumbnail" />
                        <div className="thumbnail-overlay">
                            <Maximize2 size={24} color="white" />
                        </div>
                    </div>
                ))}
            </div>

            {currentIndex !== null && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>
                        <X size={32} />
                    </button>

                    <button
                        className="lightbox-nav lightbox-prev"
                        onClick={(e) => { e.stopPropagation(); showPrev(); }}
                    >
                        <ChevronLeft size={48} />
                    </button>

                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={images[currentIndex]}
                            alt={`Full size ${currentIndex + 1}`}
                            className="lightbox-image"
                        />
                        <div className="lightbox-counter">
                            {currentIndex + 1} / {images.length}
                        </div>
                    </div>

                    <button
                        className="lightbox-nav lightbox-next"
                        onClick={(e) => { e.stopPropagation(); showNext(); }}
                    >
                        <ChevronRight size={48} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
