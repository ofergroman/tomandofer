import React from 'react';
import styles from './ProgressBar.module.css';

export default function ProgressBar({percentage, color}: { percentage: number, color: string }): React.JSX.Element {
    return (
        <div className={`${styles['container']} w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700`}>
            <div className={`${styles['progress-bar']} ${color} h-1.5 rounded-full`}
                style={{width: `${percentage}%`}}>
            </div>
        </div>
    );
}