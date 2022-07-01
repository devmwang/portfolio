import React, { useEffect, useState } from "react";

import styles from "@pages/home/home.module.scss";
import SideLinks from "@pages/home/components/sideLinks/side_links";

import HeroBase from "@pages/home/components/hero/hero_base";
import HeroName from "@pages/home/components/hero/hero_name";
import HeroLinks from "@pages/home/components/hero/hero_links";

import ProfileBase from "@src/pages/home/components/profile/base";
import ProfileBackground from "@src/pages/home/components/profile/background";

import { GitHub, Mail, Linkedin } from "react-feather";

const links = [
    { description: "GitHub", link: "https://github.com/devmwang/", iconComponent: <GitHub /> },
    { description: "LinkedIn", link: "https://linkedin.com/in/devmwang/", iconComponent: <Linkedin /> },
    { description: "Email", link: "mailto:devmwang@icloud.com", iconComponent: <Mail /> }
]

const Home = () => {
    return (
        <React.Fragment>
            <SideLinks linkList={links} revealDelay={1400} inBetweenDelay={100} />
            <HeroBase>
                <HeroName fullName="Michael Wang" revealDelay={500} />
                <HeroLinks linkList={links} revealDelay={800} inBetweenDelay={150} />
            </HeroBase> 
            <ProfileBase>
                <ProfileBackground revealDelay={1200} ubcLink="https://www.ubc.ca/" />
            </ProfileBase>
        </React.Fragment>
    )
}

export default Home;