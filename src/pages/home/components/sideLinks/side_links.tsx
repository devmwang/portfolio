import React, { useState, useEffect } from "react"

import styles from "@pages/home/components/sideLinks/side_links.module.scss"

type LinkDetails = {
    description: string;
    link: string;
    iconComponent: any;
}

interface ComponentProps {
    linkList: LinkDetails[];
    revealDelay: number;
    inBetweenDelay: number;
}

const SideLinks = (props: ComponentProps) => {
    const [isSideLinksVisible, setSideLinksVisible] = useState(new Array(props.linkList.length).fill(false));

    // Runs on component mount
    useEffect(() => {
        // For each link, reveal after specified delay
        for (let i=0; i<props.linkList.length; i++) {
            const linkRevealDelay = props.revealDelay + (i * props.inBetweenDelay);

            setTimeout(() => {
                setSideLinksVisible((currentValues: any) => {
                    return currentValues.map((value: boolean, index: number) => {
                        return index == i ? true : value;
                    })
                })
            }, linkRevealDelay)
        }
    }, []);

    // Link List Items
    const sideLinkItems = props.linkList.map((linkItem, index) => {
        const { description, link, iconComponent } = linkItem;
        
        // Pass size prop to icon component
        const sizedIconComponent = React.cloneElement(iconComponent, { size: '2rem' });

        return (
            <li key={link} className={isSideLinksVisible[index] ? styles.sideLinksVisible : styles.sideLinksHidden} >
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