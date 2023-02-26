import React from 'react';
import styles from './Styles.module.scss';
import Image from "next/image";

export const FlatPlanning = ({ roomsList = [], preview = null, flatAreaPreview = null }) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Блок №1, 1-комнатная квартира “А” 49,19 м²</h1>
            <div className={styles.main}>
                <div className={styles.preview}>
                    {preview && <Image src={preview} alt='flat' />}
                </div>
                <div className={styles.content}>
                    <div className={styles.roomsList}>
                        {
                            roomsList.map(({ title, size }, index) => (
                                <p key={title} className={styles.room}>
                                    <span>{index + 1}. {title}</span>
                                    <span>{size}</span>
                                </p>
                            ))
                        }
                    </div>
                    <div className={styles.flatAreaPreview}>
                        {flatAreaPreview && <Image src={flatAreaPreview} alt='flat preview' />}
                    </div>
                </div>
            </div>
        </div>
    );
};
