import React from "react";

import styles from "@pages/home/components/hero/hero_base.module.scss";
import HeroName from "@pages/home/components/hero/hero_name";
import HeroLinks from "@pages/home/components/hero/hero_links";

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