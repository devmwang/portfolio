import React from "react";

import styles from "@pages/home/components/hero/hero_base.module.scss";
import HeroName from "@pages/home/components/hero/hero_name";
import HeroLinks from "@pages/home/components/hero/hero_links";

type LinkDetails = {
    description: string;
    link: string;
    iconComponent: any;
}

interface ComponentProps {
    fullName: string;
    linkList: LinkDetails[];
    heroNameRevealDelay: number;
    heroLinksRevealDelay: number;
    heroLinksBetweenDelay: number;
}

const HeroBase = (props: ComponentProps) => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroItems}>
                <HeroName fullName={props.fullName} revealDelay={props.heroNameRevealDelay} />
                <HeroLinks linkList={props.linkList} revealDelay={props.heroLinksRevealDelay} inBetweenDelay={props.heroLinksBetweenDelay} />
            </div>
        </div>
    )
}

export default HeroBase;