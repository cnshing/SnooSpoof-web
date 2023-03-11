import styles from "@/app/progress.module.css"

/**
 * An generator that cycles through the progress status of generating text
 * @param status An array of strings representing all possible progresses in order
 */
function* iterateProgress(status: Array<string>) {
    // Cycling through an array
    // https://stackoverflow.com/questions/17203798/cycle-through-an-array-on-click
    var current = 0
    yield status[current++%status.length]
    return "Done!                                                                           "
}
export default function Progress() {
    const statuses: Array<string> = [
        "Collecting posts and comments for training...   (1/4)",
        "Converting training data into a dataset...           (2/4)",
        "Finetuning GPT-2 model with new dataset...      (3/4)",
        "Generating text with new model...                       (4/4)",
    ]
    const progress = iterateProgress(statuses)
    const status: string = progress.next().value
    return (
        <p className={styles.progress}>{status}</p>
    )
}