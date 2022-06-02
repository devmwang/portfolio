import React from "react";

import styles from "./hero_arrows.module.scss";

interface ComponentProps {
    arrowSrc: any;
}

const HeroArrows = (props: ComponentProps) => {
    return (
        <img src={props.arrowSrc} className={styles.heroArrows} />
    )
}

export default HeroArrows;