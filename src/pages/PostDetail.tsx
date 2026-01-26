import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { posts } from '../data/posts';
import ImageGallery from '../components/ImageGallery';
import ItineraryMap from '../components/ItineraryMap';
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

    const isAconcagua = id === 'aconcagua-expedition-andes';

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
                    <div className="markdown-content">
                        <ReactMarkdown
                            components={{
                                p: ({ children }) => {
                                    // Check if children consists only of images/whitespace
                                    const hasOnlyImages = React.Children.toArray(children).every(
                                        child => (child as any)?.type === 'img' || (typeof child === 'string' && !child.trim())
                                    );
                                    return (
                                        <p className={hasOnlyImages ? 'image-group-para' : ''}>
                                            {children}
                                        </p>
                                    );
                                },
                                img: ({ node, ...props }) => (
                                    <img
                                        {...props}
                                        className="markdown-thumbnail"
                                        loading="lazy"
                                    />
                                )
                            }}
                        >
                            {post.content}
                        </ReactMarkdown>
                    </div>

                    {post.gallery && post.gallery.length > 0 && (
                        <div className="post-gallery">
                            <h2>Photo Gallery</h2>
                            <ImageGallery images={post.gallery} />
                        </div>
                    )}
                </div>

                <div className="post-sidebar">
                    {isAconcagua && <ItineraryMap />}

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
