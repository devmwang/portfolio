import React, { useEffect, useState } from "react";

import styles from "@pages/home/home.module.scss";
import SideLinks from "@pages/home/components/sideLinks/side_links";
import HeroBase from "@pages/home/components/hero/hero_base";

import { GitHub, Mail, Linkedin } from "react-feather";

const links = [
    { description: "GitHub", link: "https://github.com/devmwang/", iconComponent: <GitHub /> },
    { description: "LinkedIn", link: "https://linkedin.com/in/devmwang/", iconComponent: <Linkedin /> },
    { description: "Email", link: "mailto:devmwang@icloud.com", iconComponent: <Mail /> }
]

const Home = () => {
    return (
        <React.Fragment>
            <SideLinks linkList={links} revealDelay={1400} />
            <HeroBase fullName="Michael Wang" linkList={links} heroNameRevealDelay={500} heroLinksRevealDelay={800} heroLinksBetweenDelay={150} />
        </React.Fragment>
    )
}

export default Home;