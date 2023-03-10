import styles from "@/components/post/box.module.scss"
import { HTMLAttributes } from "react"

/**
 * 
 * @returns The container of a reddit post
 */
export default function Box(
    {children, ...passthrough}: {children?: React.ReactNode} & HTMLAttributes<HTMLElement>
    ) {
    return (
        <section className={styles.box} {...passthrough}>
            {children}
        </section>
    )
}