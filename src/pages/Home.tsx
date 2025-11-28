import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import './Home.css';

const Home = () => {
    const recentPosts = posts.slice(0, 3);

    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>Traversing With Time</h1>
                    <p>Exploring the world, one story at a time. Join me on my journey through concerts, high altitudes, and diverse cultures.</p>
                    <Link to="/blog" className="cta-button">Read the Blog</Link>
                </div>
            </section>

            <section className="featured-treks">
                <h2>Adventures of Lifetime</h2>
                <div className="trek-grid">
                    {recentPosts.map((post) => (
                        <div key={post.id} className="trek-card">
                            <img src={post.image} alt={post.title} className="trek-image" />
                            <div className="trek-info">
                                <h3>{post.title}</h3>
                                <p>{post.content.substring(0, 100)}...</p>
                                <div className="trek-meta">
                                    <span>{post.date}</span>
                                    <span>{post.location}</span>
                                </div>
                                <Link to={`/post/${post.id}`} className="view-details">Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
