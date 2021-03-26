import React from 'react';
import styles from './HeaderBar.module.css';

const HeaderBar = () => {
    return (
        <div className={styles.HeaderBar}>
            <div className={styles.HeaderItem}>
                Equipo
            </div>
            <div className={styles.HeaderItem}>
                Runs
            </div>
            <div className={styles.HeaderItem}>
                Ratios
            </div>
            <div className={styles.HeaderItem}>
                Cold brew
            </div>
        </div>
    )
}

export default HeaderBar;