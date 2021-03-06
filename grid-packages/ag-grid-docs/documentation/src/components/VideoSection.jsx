import React from 'react';
import classnames from 'classnames';
import styles from './VideoSection.module.scss';

const VideoSection = ({ src, title, header, children }) => (
    <div className={styles['video-section']}>
        <p className={classnames({ [styles['video-section--header']]: header })}>
            {children}
        </p>
        <iframe
            className={styles['video-section__frame']}
            title={title}
            src={src}
            frameBorder='0'
            modestbranding='1'
            allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen={true}>
        </iframe>
    </div>
);

export default VideoSection;