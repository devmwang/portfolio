import React, { useState, useEffect } from "react"

import styles from "@pages/home/components/sideLinks/side_links.module.scss"

type LinkDetails = {
    description: string;
    link: string;
    iconComponent: any;
    revealDelay: number;
}

interface ComponentProps {
    linkList: LinkDetails[];
}

const SideLinks = (props: ComponentProps) => {
    const [isSideLinksVisible, setSideLinksVisible] = useState(false);

    // Component Variables
    const sideLinksRevealDelay = 1000;

    // Runs on component mount
    useEffect(() => {
        // Reveal name text after delay
        setTimeout(() => {
            setSideLinksVisible(true);
        }, sideLinksRevealDelay)
    }, []);

    // Link List Items
    const sideLinkItems = props.linkList.map((linkItem, index) => {
        const { description, link, iconComponent } = linkItem;
        
        // Pass size prop to icon component
        const sizedIconComponent = React.cloneElement(iconComponent, { size: 30 });

        return (
            <li key={link} className={isSideLinksVisible ? styles.sideLinksVisible : styles.sideLinksHidden} >
                <a href={link} target="_blank" rel="noopener noreferrer" aria-label={description} className={styles.sideLinkItem} >
                    {sizedIconComponent}
                </a>
            </li>
        )
    })

    return (
        <div className={styles.sideLinksContainer} >
            <ul className={styles.sideLinks} >
                {sideLinkItems}
            </ul>
        </div>
    )
}

export default SideLinks;