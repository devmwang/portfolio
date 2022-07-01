import React from "react";

import styles from "@pages/home/components/profile/background.module.scss"

interface ComponentProps {
    revealDelay: number;
    ubcLink: string;
}

const ProfileBackground = (props: ComponentProps) => {
    return (
        <section className={styles.backgroundContainer}>
            <div className={styles.title}>
                Background
            </div>
            <div className={styles.content}>
                <p>I'm currently a student at the <a href={props.ubcLink} target="_blank" rel="noopener noreferrer" className={styles.links}>University of British Columbia</a> pursuing a Bachelor of Computer Science and Masters of Management.</p>
            </div>
        </section>
    )
}

export default ProfileBackground;