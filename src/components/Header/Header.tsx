import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>DEV INSIGHTS</div>
            <nav>
                <a href="/" className={styles.navLink}>Home</a>
                <a href="/new-post" className={styles.navLink}>New Post</a>
            </nav>
        </header>
    );
};

export default Header;