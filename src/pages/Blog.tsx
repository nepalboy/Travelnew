import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import './Blog.css';

const Blog = () => {
    return (
        <div className="blog-page">
            <h1>All Posts</h1>
            <div className="blog-grid">
                {posts.map((post) => (
                    <div key={post.id} className="blog-card">
                        <img src={post.image} alt={post.title} className="blog-image" />
                        <div className="blog-info">
                            <h3>{post.title}</h3>
                            <div className="blog-meta">
                                <span>{post.date}</span>
                                <span>{post.location}</span>
                            </div>
                            <p>{post.content.substring(0, 150)}...</p>
                            <div className="blog-tags">
                                {post.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                            </div>
                            <Link to={`/post/${post.id}`} className="read-more">Read More</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
