import React from "react";

import styles from "@pages/home/components/profile/base.module.scss";

interface ComponentProps {
    children: React.ReactNode;
}

const ProfileBase = ({ children }: ComponentProps) => {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.profile}>
                {children}
            </div>
        </div>
    )
}

export default ProfileBase;