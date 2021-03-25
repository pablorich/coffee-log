import React from 'react';
import HeaderBar from './HeaderBar/HeaderBar';
import FooterBar from './FooterBar/FooterBar';

import Equipment from '../Equipment/Equipment';

import styles from './Presentation.module.css';

const Presentation = () => {
    return (
        <div className={styles.PageContainer}>
            <div className={styles.Header}>
                <HeaderBar />
            </div>
            <div className={styles.ContentWrap}>
                <Equipment />
            </div>
            <div className={styles.Footer}>
                <FooterBar />
            </div>
        </div>
    )
}

export default Presentation;