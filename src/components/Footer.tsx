import { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
    const [viewCount, setViewCount] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://hits.dwyl.com/nepalboy/travelnew.json')
            .then(res => res.json())
            .then(data => setViewCount(data.message))
            .catch(err => console.error('Error fetching view count:', err));
    }, []);

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="view-counter">
                    <div className="view-counter-backdrop"></div>
                    <span className="view-count">{viewCount || '...'}</span>
                </div>
                <p>&copy; {new Date().getFullYear()} Traversing With Time. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
