import React, { useEffect, useState } from "react";

import styles from "@pages/home/home.module.scss";
import SideLinks from "@pages/home/components/sideLinks/side_links";

import HeroBase from "@src/pages/home/components/hero/base";
import HeroName from "@src/pages/home/components/hero/name";
import HeroLinks from "@src/pages/home/components/hero/links";

import ProfileBase from "@src/pages/home/components/profile/base";
import ProfileBackground from "@src/pages/home/components/profile/background";
import ProfileSkills from "@src/pages/home/components/profile/skills";

import { GitHub, Mail, Linkedin } from "react-feather";

// Static Data
const fullName = "Michael Wang";

const links = [
    { description: "GitHub", link: "https://github.com/devmwang/", iconComponent: <GitHub /> },
    { description: "LinkedIn", link: "https://linkedin.com/in/devmwang/", iconComponent: <Linkedin /> },
    { description: "Email", link: "mailto:devmwang@icloud.com", iconComponent: <Mail /> },
];

const baseDelay = 500;
const inBetweenDelay = 150;

const ubcLink = "https://www.ubc.ca/";
const sauderLink = "https://www.sauder.ubc.ca/";

const skillsLanguages = [
  "Python",
  "TypeScript",
  "JavaScript",
  "C#",
  "Java",
  "swift",
  "HTML",
  "CSS/Sass",
];

const skillsFrameworks = [
    "Next.js",
    "React",
    "Angular",
    "Node.js",
    "Prisma",
    "SwiftUI",
];

const skillsTools = [
    "Git/GitHub",
    "Vite",
    "Chrome DevTools",
    "Figma",
    "Gradle",
    "MongoDB Atlas",
]

const skillsDeployments = [
    "Vercel",
    "Vercel Edge Network",
    "AWS EC2",
    "Cloudflare Workers",
]

const Home = () => {
    // Automatic animation delay calculation
    const heroNameDelay = baseDelay
    const heroLinksDelay = baseDelay + 300
    const sideLinksDelay = heroLinksDelay + ((links.length - 1) * inBetweenDelay) + 200
    const profileBackgroundDelay = sideLinksDelay + ((links.length - 1) * inBetweenDelay) + 200
    const profileSkillsDelay = profileBackgroundDelay + 200

    return (
        <React.Fragment>
            <SideLinks linkList={links} revealDelay={sideLinksDelay} inBetweenDelay={inBetweenDelay} />
            <HeroBase>
                <HeroName fullName={fullName} revealDelay={heroNameDelay} />
                <HeroLinks linkList={links} revealDelay={heroLinksDelay} inBetweenDelay={inBetweenDelay} />
            </HeroBase> 
            <ProfileBase>
                <ProfileBackground revealDelay={profileBackgroundDelay} ubcLink={ubcLink} sauderLink={sauderLink} />
                <ProfileSkills revealDelay={profileSkillsDelay} languages={skillsLanguages} frameworks={skillsFrameworks} tools={skillsTools} deployments={skillsDeployments} />
            </ProfileBase>
        </React.Fragment>
    )
}

export default Home;