import React, { useEffect, useState } from "react";

import styles from './hero_name.module.scss';

interface ComponentProps {
    fullName: string;
    revealDelay: number;
}

const HeroName = (props: ComponentProps) => {
    const [isVisible, setVisible] = useState(false);

    // Runs on component mount
    useEffect(() => {
        // Reveal name text after delay
        setTimeout(() => {
            setVisible(true);
        }, props.revealDelay)
    }, []);

    return (
        <React.Fragment>
            <div className={styles.nameContainer}>
                <div className={styles.nameText}>
                    <div className={isVisible ? styles.visible : styles.hidden}>
                        {props.fullName}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeroName;