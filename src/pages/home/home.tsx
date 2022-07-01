import React, { useEffect, useState } from "react";

import styles from "@pages/home/home.module.scss";
import SideLinks from "@pages/home/components/sideLinks/side_links";

import HeroBase from "@src/pages/home/components/hero/base";
import HeroName from "@src/pages/home/components/hero/name";
import HeroLinks from "@src/pages/home/components/hero/links";

import ProfileBase from "@src/pages/home/components/profile/base";
import ProfileBackground from "@src/pages/home/components/profile/background";

import { GitHub, Mail, Linkedin } from "react-feather";

// Static Data
const fullName = "Michael Wang"

const links = [
    { description: "GitHub", link: "https://github.com/devmwang/", iconComponent: <GitHub /> },
    { description: "LinkedIn", link: "https://linkedin.com/in/devmwang/", iconComponent: <Linkedin /> },
    { description: "Email", link: "mailto:devmwang@icloud.com", iconComponent: <Mail /> }
]

const baseDelay = 500
const inBetweenDelay = 150

const ubcLink = "https://www.ubc.ca/"
const sauderLink = "https://www.sauder.ubc.ca/"

const Home = () => {
    // Automatic animation delay calculation
    const heroNameDelay = baseDelay
    const heroLinksDelay = baseDelay + 300
    const sideLinksDelay = heroLinksDelay + ((links.length - 1) * inBetweenDelay) + 200
    const profileDelay = sideLinksDelay + ((links.length - 1) * inBetweenDelay) + 200

    return (
        <React.Fragment>
            <SideLinks linkList={links} revealDelay={sideLinksDelay} inBetweenDelay={inBetweenDelay} />
            <HeroBase>
                <HeroName fullName={fullName} revealDelay={heroNameDelay} />
                <HeroLinks linkList={links} revealDelay={heroLinksDelay} inBetweenDelay={inBetweenDelay} />
            </HeroBase> 
            <ProfileBase>
                <ProfileBackground revealDelay={profileDelay} ubcLink={ubcLink} sauderLink={sauderLink} />
            </ProfileBase>
        </React.Fragment>
    )
}

export default Home;