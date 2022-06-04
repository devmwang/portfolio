import React from "react";

import styles from "./home.module.scss"
import HeroName from "./components/hero_name";
import HeroLinks from "./components/hero_links";

import GithubLogo from "@assets/icons/GithubLogo.svg";
import EmailIcon from "@assets/icons/EmailIcon.svg";

import DownArrowGlyph from "@assets/icons/DownArrowGlyph.svg";

const Home = () => {
    const links = [
        { description: "GitHub", link: "https://github.com/devmwang/", imgSrc: GithubLogo },
        { description: "Email", link: "mailto:devmwang@icloud.com", imgSrc: EmailIcon }
    ]

    return (
        <React.Fragment>
            <div className={styles.hero}>
                <div className={styles.heroItems}>
                    <HeroName fullName="Michael Wang" revealDelay={500} />
                    <HeroLinks linkList={links} revealDelay={750} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;