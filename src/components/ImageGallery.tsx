import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import './ImageGallery.css';

import type { GalleryItem } from '../data/posts';
import './ImageGallery.css';

interface ImageGalleryProps {
    items: (string | GalleryItem)[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const galleryItems: GalleryItem[] = items.map(item =>
        typeof item === 'string' ? { url: item, type: 'image' } : item
    );

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
            setCurrentIndex((prevIndex) => (prevIndex! + 1) % galleryItems.length);
        }
    }, [currentIndex, galleryItems.length]);

    const showPrev = useCallback(() => {
        if (currentIndex !== null) {
            setCurrentIndex((prevIndex) => (prevIndex! - 1 + galleryItems.length) % galleryItems.length);
        }
    }, [currentIndex, galleryItems.length]);

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

    const renderMedia = (item: GalleryItem, className: string, isLightbox = false) => {
        if (item.type === 'video') {
            return (
                <video
                    src={item.url}
                    className={className}
                    controls={isLightbox}
                    autoPlay={isLightbox}
                    muted={!isLightbox}
                    loop={!isLightbox}
                    playsInline
                />
            );
        }
        return <img src={item.url} alt={item.caption || "Gallery"} className={className} />;
    };

    return (
        <div className="image-gallery-container">
            <div className="gallery-grid">
                {galleryItems.map((item, index) => (
                    <div key={index} className="gallery-thumbnail-wrapper" onClick={() => openLightbox(index)}>
                        {renderMedia(item, "gallery-thumbnail")}
                        <div className="thumbnail-overlay">
                            {item.type === 'video' ? <div className="video-icon">▶</div> : <Maximize2 size={24} color="white" />}
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
                        <div className="lightbox-media-container">
                            {renderMedia(galleryItems[currentIndex], "lightbox-image", true)}
                        </div>

                        <div className="lightbox-info">
                            {galleryItems[currentIndex].caption && (
                                <p className="lightbox-caption">{galleryItems[currentIndex].caption}</p>
                            )}
                            <div className="lightbox-counter">
                                {currentIndex + 1} / {galleryItems.length}
                            </div>
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
