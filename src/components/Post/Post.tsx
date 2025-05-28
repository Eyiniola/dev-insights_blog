import React from 'react';
import type { BlogPost } from '../../types';
import styles from './Post.module.css';
import classNames from 'classnames';


interface PostProps {
    post: BlogPost;
    highlightAuthor?: string;
}

const Post: React.FC<PostProps> = React.memo(({ post, highlightAuthor }) => {
    const previewContent = post.content.split(' ').slice(0, 20).join(' ') + '...';
    const isHighlighted = highlightAuthor && post.author === highlightAuthor;
    const postClass= classNames(styles.postCard, {[styles.highlightedPost]: isHighlighted, });

    const now = new Date();
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const isNew = post.datePosted > twentyFourHoursAgo;

    return (
        <div className={postClass}>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <p className={styles.postAuthor}>By: {post.author}</p>
            <p className={styles.postPreview}>{previewContent}</p>
            <p className={styles.datePosted}> 
                Posted: {post.datePosted.toLocaleDateString()}
                {isNew && (
                    <span style={{
                        backgroundColor: '#ff4d4f',
                        color: 'white',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontSize: '0.75em',
                        marginLeft: '8px',
                        fontWeight: 'bold',
                    }}>NEW</span>
                )}
                
                </p>
        </div>
    );
});

export default Post;