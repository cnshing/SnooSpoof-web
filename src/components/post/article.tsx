import styles from "@/components/post/article.module.css"
import { CSSProperties } from "react";

/**
 * 
 * @param headline The caption of the article
 * @param paragraph The main content of the article as a children of <p>.
 * @param size An optional override for the text size
 * @returns An responsive heading and paragraph text 
 */
export default function Article(
    {headline, children, size = "80%"}:
    {headline: string, children?: React.ReactNode, size?: string}
)
    {
    const sizing = {
        "--article-size": size
    } as CSSProperties
    return (
    <article className={styles.article} style={sizing}>
        <h2 className={styles.headline}>{headline}</h2>
        {children}
    </article>
    )
}

