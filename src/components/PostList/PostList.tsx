import React from 'react';
import styles from './PostList.module.css';
import Post from '../Post/Post';
import type { BlogPost } from '../../types';

const PostList: React.FC = () => {
    const posts: BlogPost[] = [
        {
            datePosted: new Date('2023-08-01'),
            id: '1',
            title: 'Introduction to HTML & CSS',
            author: 'John Doe',
            content: 'Learn the basics of building web pages with HTML and CSS, including layout and styling fundamentals.',
            date: '2023-08-01'
        },
        {
            datePosted: new Date('2023-08-02'),
            id: '2',
            title: 'JavaScript Essentials',
            author: 'Jane Smith',
            content: 'A beginner-friendly guide to JavaScript syntax, data types, loops, and basic DOM manipulation.',
            date: '2023-08-02'
        },
        {
            datePosted: new Date('2023-08-03'),
            id: '3',
            title: 'Responsive Web Design',
            author: 'Bob Johnson',
            content: 'Master techniques for creating mobile-friendly layouts using media queries and flexible grids.',
            date: '2023-08-03'
        },
        {
            datePosted: new Date('2023-08-04'),
            id: '4',
            title: 'CSS Flexbox & Grid',
            author: 'Alice Smith',
            content: 'Understand how to build complex layouts using modern CSS tools like Flexbox and Grid.',
            date: '2023-08-04'
        },
        {
            datePosted: new Date('2023-08-05'),
            id: '5',
            title: 'JavaScript DOM Manipulation',
            author: 'Charlie Johnson',
            content: 'Explore methods to interact with HTML elements dynamically using JavaScript.',
            date: '2023-08-05'
        },
        {
            datePosted: new Date('2023-08-06'),
            id: '6',
            title: 'Version Control with Git & GitHub',
            author: 'Emily Smith',
            content: 'Learn how to track code changes, collaborate, and manage your projects using Git and GitHub.',
            date: '2023-08-06'
        },
        {
            datePosted: new Date('2023-08-07'),
            id: '7',
            title: 'Getting Started with React',
            author: 'Frank Johnson',
            content: 'An introduction to building component-based UIs with React, JSX, and props.',
            date: '2023-08-07'
        },
        {
            datePosted: new Date('2023-08-08'),
            id: '8',
            title: 'State Management in React',
            author: 'Grace Smith',
            content: 'Dive into managing component state using useState, useEffect, and lifting state up.',
            date: '2023-08-08'
        },
        {
            datePosted: new Date('2023-08-09'),
            id: '9',
            title: 'Intro to TypeScript for Web Devs',
            author: 'Hank Johnson',
            content: 'Add strong typing to your JavaScript projects using TypeScript and enhance code maintainability.',
            date: '2023-08-09'
        }

    ];
    return (
        <main className={styles.postListContainer}>
            <h2> Blog Posts</h2>
            <div className={styles.postsGrid}>
                {posts.map((post) => (
                    <Post key={post.id} post={post} highlightAuthor="John Doe" />
                ))}
            </div>
        </main>
    );
};

export default PostList;