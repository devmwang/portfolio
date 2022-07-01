import React from "react";

import styles from "@pages/home/components/hero/base.module.scss";

interface ComponentProps {
    children: React.ReactNode;
}

const HeroBase = ({ children }: ComponentProps) => {
    return (
        <div className={styles.hero}>
            <div>
                {children}
            </div>
        </div>
    )
}

export default HeroBase;