import React, { useState, useEffect } from "react";

import styles from "@pages/home/components/profile/background.module.scss"

interface ComponentProps {
    revealDelay: number;
    ubcLink: string;
    sauderLink: string;
}

const ProfileBackground = (props: ComponentProps) => {
    const [isProfileVisible, setProfileVisible] = useState(false);

    // Runs on component mount
    useEffect(() => {
        // Reveal name text after delay
        const timeout = setTimeout(() => setProfileVisible(true), props.revealDelay);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={isProfileVisible ? styles.visible : styles.hidden}>
            <section className={styles.backgroundContainer}>
                <div className={styles.title}>
                    Background
                </div>
                <div className={styles.content}>
                    <p>I'm currently a student at the <a href={props.ubcLink} target="_blank" rel="noopener noreferrer" className={styles.links}>University of British Columbia</a> and <a href={props.sauderLink} target="_blank" rel="noopener noreferrer" className={styles.links}>Sauder School of Business</a>, pursuing a Bachelor of Computer Science and a Masters of Management.</p>
                    <p>I enjoy learning new technologies and growing my knowledge on modern frameworks. My experience creating programs spans a wide variety of platforms, ranging from interactive web and mobile apps, to native desktop software, and cutting-edge virtual reality experiences.</p>
                </div>
            </section>
        </div>
    )
}

export default ProfileBackground;