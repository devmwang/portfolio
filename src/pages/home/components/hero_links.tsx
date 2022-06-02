import React, { useEffect, useState } from "react";

import styles from './hero_links.module.scss';

type LinkDetails = {
    description: string;
    link: string;
    imgSrc: any;
}

interface ComponentProps {
    linkList: LinkDetails[];
    revealDelay: number;
}

const HeroLinks = (props: ComponentProps) => {
    const [isVisible, setVisible] = useState(false);
    
    // Runs on component mount
    useEffect(() => {
        // Reveal name text after delay
        setTimeout(() => {
            setVisible(true);
        }, props.revealDelay)
    }, []);
    
    // Link List Items
    const listItems = props.linkList.map((linkItem) => {
        const { description, link, imgSrc } = linkItem;
        
        return (
            <a key={link} href={link} target="_blank" rel="noopener noreferrer">
                <img src={imgSrc} alt={description} className={styles.linkItem} />
            </a>
            )
    })
    
    return (
        <React.Fragment>
            <div className={styles.linksContainer}>
                <div className={styles.links}>
                    <div className={isVisible ? styles.visible : styles.hidden}>
                        {listItems}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeroLinks;