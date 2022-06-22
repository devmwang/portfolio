import React from "react";

import styles from "@pages/home/components/hero/hero_base.module.scss";
import HeroName from "@pages/home/components/hero/hero_name";
import HeroLinks from "@pages/home/components/hero/hero_links";

type LinkDetails = {
    description: string;
    link: string;
    iconComponent: any;
    revealDelay: number;
}

interface ComponentProps {
    linkList: LinkDetails[];
    heroNameRevealDelay: number;
}

const HeroBase = (props: ComponentProps) => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroItems}>
                <HeroName fullName="Michael Wang" revealDelay={props.heroNameRevealDelay} />
                <HeroLinks linkList={props.linkList} />
            </div>
        </div>
    )
}

export default HeroBase;