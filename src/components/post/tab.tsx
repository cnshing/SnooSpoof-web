import styles from "@/components/post/tab.module.css"
import React, { CSSProperties } from "react"

/**
 * Represents the left sided section of a reddit post. 
 * @return A divider bewteen the left and right sides of a post
 */
export default function Tab({ children, color = "white" }:
    { children?: React.ReactNode, color?: string }) {

    return (
        <div className={styles.tab} style={{ backgroundColor: color } as CSSProperties}>
            {children}
        </div>
    )
}