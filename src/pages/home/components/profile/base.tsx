import React from "react";

import styles from "@pages/home/components/profile/base.module.scss";
// import ProfileBackground from "@pages/home/components/profile/background";

interface ComponentProps {
    children: React.ReactNode;
}

const ProfileBase = ({ children }: ComponentProps) => {
    return (
        <div className={styles.profile}>
            {children}
        </div>
    )
}

export default ProfileBase;