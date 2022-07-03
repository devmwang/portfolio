import React, { useState, useEffect } from "react";

import styles from "@pages/home/components/profile/skills.module.scss"

interface ComponentProps {
    revealDelay: number;
    languages: string[];
    frameworks: string[];
    tools: string[];
    deployments: string[];
}

const ProfileSkills = (props: ComponentProps) => {
    const [isComponentVisible, setComponentVisible] = useState(false);

    // Runs on component mount
    useEffect(() => {
        // Reveal name text after delay
        const timeout = setTimeout(() => setComponentVisible(true), props.revealDelay);
        return () => clearTimeout(timeout);
    }, []);

    // Languages Column
    const languagesList = props.languages.map((language, index) => {        
        return (
            <li className={styles.listItem}>
                {language}
            </li>
        )
    })

    // Frameworks Column
    const frameworksList = props.frameworks.map((framework, index) => {        
        return (
            <li className={styles.listItem}>
                {framework}
            </li>
        )
    })

    // Tools Column
    const toolsList = props.tools.map((tool, index) => {        
        return (
            <li className={styles.listItem}>
                {tool}
            </li>
        )
    })

    // Deployment Column
    const deploymentsList = props.deployments.map((deployment, index) => {        
        return (
            <li className={styles.listItem}>
                {deployment}
            </li>
        )
    })

    return (
        <div className={isComponentVisible ? styles.visible : styles.hidden}>
            <section className={styles.skillsContainer}>
                <div className={styles.title}>
                    Skills
                </div>
                <div className={styles.content}>
                    <div className={styles.column}>
                        <div className={styles.title}>
                            Languages
                        </div>
                        <ul className={styles.list}>
                            {languagesList}
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.title}>
                            Frameworks
                        </div>
                        <ul className={styles.list}>
                            {frameworksList}
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.title}>
                            Tools
                        </div>
                        <ul className={styles.list}>
                            {toolsList}
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.title}>
                            Deployment Methods
                        </div>
                        <ul className={styles.list}>
                            {deploymentsList}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProfileSkills;