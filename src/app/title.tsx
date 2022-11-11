import styles from "@/app/title.module.css"

export default function Title() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Generate reddit posts of any user through
        <em className={styles.emphasize_blue}>AI</em>
      </h1>
    </div>
  )
}
