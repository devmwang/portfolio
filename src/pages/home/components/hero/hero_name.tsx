import React, { useEffect, useState } from "react";

import styles from './hero_name.module.scss';

interface ComponentProps {
    fullName: string;
    revealDelay: number;
}

const HeroName = (props: ComponentProps) => {
    const [isNameVisible, setNameVisible] = useState(false);

    // Runs on component mount
    useEffect(() => {
        // Reveal name text after delay
        setTimeout(() => {
            setNameVisible(true);
        }, props.revealDelay)
    }, []);

    return (
        <React.Fragment>
            <div className={styles.nameContainer}>
                <div className={styles.nameText}>
                    <div className={isNameVisible ? styles.visible : styles.hidden}>
                        {props.fullName}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeroName;