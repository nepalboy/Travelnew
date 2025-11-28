import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import './PostDetail.css';

const PostDetail = () => {
    const { id } = useParams<{ id: string }>();
    const post = posts.find((p) => p.id === id);

    if (!post) {
        return (
            <div className="post-not-found">
                <h2>Post not found</h2>
                <Link to="/blog">Back to Blog</Link>
            </div>
        );
    }

    return (
        <div className="post-detail">
            <div className="post-header">
                <img src={post.image} alt={post.title} className="post-banner" />
                <div className="post-title-overlay">
                    <h1>{post.title}</h1>
                    <div className="post-meta-header">
                        <span>{post.date}</span>
                        <span> | </span>
                        <span>{post.location}</span>
                    </div>
                </div>
            </div>

            <div className="post-content-container">
                <div className="post-main-content">
                    {post.content.split('\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}

                    {post.gallery && post.gallery.length > 0 && (
                        <div className="post-gallery">
                            <h2>Photo Gallery</h2>
                            <div className="gallery-grid">
                                {post.gallery.map((imageUrl, index) => (
                                    <img
                                        key={index}
                                        src={imageUrl}
                                        alt={`${post.title} - Photo ${index + 1}`}
                                        className="gallery-image"
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="post-sidebar">
                    <div className="tags-card">
                        <h3>Tags</h3>
                        <div className="sidebar-tags">
                            {post.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                        </div>
                    </div>
                    <Link to="/blog" className="back-button">Back to All Posts</Link>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;
