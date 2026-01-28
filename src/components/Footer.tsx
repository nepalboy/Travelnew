import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="view-counter">
                    <img src="https://hits.dwyl.com/nepalboy/travelnew.svg" alt="Total Views" />
                </div>
                <p>&copy; {new Date().getFullYear()} Traversing With Time. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
