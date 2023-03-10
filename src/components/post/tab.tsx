import styles from "@/components/post/tab.module.css"

/**
 * Represents the left sided section of a reddit post. 
 * @return A divider bewteen the left and right sides of a post
 */
export default function Tab({children}) {
    return (
        <div className={styles.tab}>
            {children}
        </div>
    )
}