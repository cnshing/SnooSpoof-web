import styles from "@/components/generate/progress.module.css"

/**
 * Sleep for duration
 * From
 * https://stackoverflow.com/questions/6921275/is-it-possible-to-chain-settimeout-functions-in-javascript/62034951#62034951
 * @param duration Any milliseconds
 * @returns 
 */
async function delay(duration: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, duration);
    });
  }

/**
 * The status messages
 */
export const statuses: Array<string> = [
    "Collecting posts and comments for training...   (1/4)",
    "Converting training data into a dataset...           (2/4)",
    "Finetuning GPT-2 model with new dataset...      (3/4)",
    "Generating text with new model...                       (4/4)",
    "Done!                                                                           "
]

/**
 * An generator that cycles through the progress status of generating text
 * @param status An array of strings representing all possible progresses in order
 */
export function* iterateProgress(status: Array<string> = statuses) {
    while (true) yield* status
    return status[status.length - 1]
}

/**
 * Shows the current progress of generating text
 * @param status Any string
 * @returns 
 */
export function Progress({ status }: { status: string }) {
    return (
        <p className={styles.progress}>{status}</p>
    )
}

export const defaultIntervals: Array<number> = [15000,15000,15000,15000]

/**
 * Fake the progress of generating text. Used to help clients patience for long
 * text jobs.
 * 
 * TODO: Once SnooSpoof-backend-api supports it, poll for current status of generating
 * 
 * @param intervals An array of intervals to wait between each callback
 * @param callback The function called per interval
 */
export async function fakeProgress(intervals: Array<number> = defaultIntervals, callback: () => void) {
    for (const interval of intervals) {
        callback()
        await delay(interval)
    }
}

