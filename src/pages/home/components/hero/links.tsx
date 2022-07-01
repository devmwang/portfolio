import React, { useEffect, useState } from "react";

import styles from '@pages/home/components/hero/links.module.scss';

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

const HeroLinks = (props: ComponentProps) => {
    const [isLinkVisible, setLinkVisible] = useState(new Array(props.linkList.length).fill(false));

    // Runs on component mount
    useEffect(() => {
        // For each link, reveal after specified delay
        for (let i=0; i<props.linkList.length; i++) {
            const linkRevealDelay = props.revealDelay + (i * props.inBetweenDelay);

            setTimeout(() => {
                setLinkVisible((currentValues: any) => {
                    return currentValues.map((value: boolean, index: number) => {
                        return index == i ? true : value;
                    })
                })
            }, linkRevealDelay)
        }
    }, []);
    
    // Link List Items
    const listItems = props.linkList.map((linkItem, index) => {
        const { description, link, iconComponent } = linkItem;
        
        // Pass size prop to icon component
        const sizedIconComponent = React.cloneElement(iconComponent, { size: '4.5rem' });

        return (
            <div key={link} className={isLinkVisible[index] ? styles.visible : styles.hidden}>
                <a href={link} target="_blank" rel="noopener noreferrer" aria-label={description} className={styles.linkItem} >
                    {sizedIconComponent}
                </a>
            </div>
        )
    })
    
    return (
        <React.Fragment>
            <div className={styles.linksContainer}>
                {listItems}
            </div>
        </React.Fragment>
    )
}

export default HeroLinks;