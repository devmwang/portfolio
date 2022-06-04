import React, { useEffect, useState } from "react";

import styles from './hero_links.module.scss';

type LinkDetails = {
    description: string;
    link: string;
    imgSrc: any;
    revealDelay: number;
}

interface ComponentProps {
    linkList: LinkDetails[];
}

const HeroLinks = (props: ComponentProps) => {
    const [isVisible, setVisible] = useState(new Array(props.linkList.length).fill(false));

    // Runs on component mount
    useEffect(() => {
        // For each link, reveal after specified delay
        for (let i=0; i<props.linkList.length; i++) {
            setTimeout(() => {
                setVisible((currentValues: any) => {
                    return currentValues.map((value: boolean, index: number) => {
                        return index == i ? true : value;
                    })
                })
            }, props.linkList[i].revealDelay)
        }
    }, []);
    
    // Link List Items
    const listItems = props.linkList.map((linkItem, index) => {
        const { description, link, imgSrc } = linkItem;
        
        return (
            <a key={link} href={link} target="_blank" rel="noopener noreferrer" className={isVisible[index] ? styles.visible : styles.hidden}>
                <img src={imgSrc} alt={description} className={styles.linkItem} />
            </a>
            )
    })
    
    return (
        <React.Fragment>
            <div className={styles.linksContainer}>
                <div className={styles.links}>
                    {listItems}
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeroLinks;