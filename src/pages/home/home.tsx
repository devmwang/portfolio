import React from "react";

import styles from "./home.module.scss"
import HeroName from "./components/hero_name";
import HeroLinks from "./components/hero_links";

import GithubLogo from "@assets/icons/GithubLogo.svg";
import EmailIcon from "@assets/icons/EmailIcon.svg";

import DownArrowGlyph from "@assets/icons/DownArrowGlyph.svg";

const Home = () => {
    const links = [
        { description: "GitHub", link: "https://github.com/devmwang/", imgSrc: GithubLogo, revealDelay: 800 },
        { description: "Email", link: "mailto:devmwang@icloud.com", imgSrc: EmailIcon, revealDelay: 1000 }
    ]

    // Link List Items
    const sideLinkItems = links.map((linkItem, index) => {
        const { description, link, imgSrc } = linkItem;
        
        return (
            <li key={link} >
                <a href={link} target="_blank" rel="noopener noreferrer" aria-label={description} >
                    <img src={imgSrc} alt={description} className={styles.sideLinkIconItem} />
                </a>
            </li>
        )
    })

    return (
        <React.Fragment>
            <div className={styles.sideLinksContainer} >
                <ul className={styles.sideLinks} >
                    {sideLinkItems}
                </ul>
            </div>
            <div className={styles.hero}>
                <div className={styles.heroItems}>
                    <HeroName fullName="Michael Wang" revealDelay={500} />
                    <HeroLinks linkList={links} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;