import { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
    const [viewCount, setViewCount] = useState<number | null>(null);

    useEffect(() => {
        // Using counterapi.dev which has permissive CORS
        fetch('https://api.counterapi.dev/v1/nepalboy/travelnew/up')
            .then(res => res.json())
            .then(data => setViewCount(data.count))
            .catch(err => {
                console.error('Error fetching view count:', err);
                // Fallback to a static number or hidden if failed
                setViewCount(0);
            });
    }, []);

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="view-counter">
                    <div className="view-counter-backdrop"></div>
                    <span className="view-count">{viewCount || '...'}</span>
                </div>
                <p>&copy; {new Date().getFullYear()} Traversing With Time. All rights reserved.</p>
                <p className="footer-updated">Last Updated: February 5, 2026</p>
            </div>
        </footer>
    );
};

export default Footer;
