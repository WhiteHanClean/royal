import React, { useRef, useEffect, useState } from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import styles from './styles.module.scss';

export const AroundViewer = () => {
    const pSRef = React.createRef();
    return (
        <div className={styles.wrapper}>
            <ReactPhotoSphereViewer src={'2.jpg'} height={'1000px'} width={'100%'} container={'div'} />
        </div>
    )
};
