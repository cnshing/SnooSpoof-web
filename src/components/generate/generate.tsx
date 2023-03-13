'use client';
import { useRouter } from 'next/navigation';
import styles from "@/components/generate/generate.module.scss"
import { CSSProperties, useEffect, useState } from "react"
import Button from "@/components/ui/button"
import { Input } from "@/components/ui/fields"
import { updateSetting, generate, getGenerationConfig, getSetting, GenerationConfig, GeneratedText } from "@/components/generate/manageGenerate";
import { iterateProgress, Progress, fakeProgress } from "@/components/generate/progress"

/**
 * Asks reddit if the username is valid.
 * @param username A reddit username
 * @returns A Promise resolving to the validity of the user. Returns false if is reddit is unavaliable.
 */
export async function validUsername(username: string): Promise<boolean> {
    const parameters = {
        user: username
    }
    const query: string = new URLSearchParams(parameters).toString()
    const url: string = "https://www.reddit.com/api/username_available.json?"
    const usernameTaken = fetch(url + query)
        .then((response) => response.json())
        .then((value) => value)
        .catch(() => false)

    return usernameTaken.then((taken) => typeof taken == 'boolean' && !taken)
}

/**
 * Updates the username and return the value.
 */
function updateUsername(user: string): string  {
    updateSetting("username", user)
    return user;
}

/**
 * Call to action for entering username and generating text
 */
export default function GenerateBar() {

    const buttonWidth: CSSProperties = {
        "--button-width": "132px" /* Share button width values to use in CSS calculations for better "look and feel"*/
    } as CSSProperties;

    useEffect(
        () => {
            updateUsername("") /* On first load empty the username*/
        }
        , []
    )
    const unqiueGenId: string = "usernameInput"

    /**
     * Attempts to retrieve the single username field
     * @returns An Input Field holding the username
     */
    const usernameField = () => {
        const field: HTMLInputElement | null = document.getElementById(unqiueGenId) as HTMLInputElement
        return field
    }

    /**
     * Shows a tooltip stating an error message near the username field
     * @param errorMsg Any message
     */
    const promptInputError = (errorMsg: string) => {
        const input = usernameField()
        if (input !== null) {
            input.setCustomValidity(errorMsg)
            input.reportValidity();
        }
    }

    /**
     * Closes the tooltip showing the error message near the username field
     */
    const clearInputError = () => {
        const input = usernameField()
        if (input !== null) {
            input.setCustomValidity("")
        }
    }

    const progress = iterateProgress();
    const [status, setStatus] = useState<string>(" ")
    const router = useRouter()
    return (
        <>
            <div className={`${styles.container} ${styles.font}`} style={buttonWidth}>
                <span className={`${styles.prefix}`}>/u/</span>
                <Input id={unqiueGenId} onChange={clearInputError}
                    className={`${styles.username}`} initialValue="" composeValue={updateUsername}
                    title="Letters, numbers, dashes, and underscores only."
                    placeholder="Username" type="text" required />
                <Button style={
                    {
                        "width": "var(--button-width)" /* Override default button width */
                    } as CSSProperties
                }
                    color="#0079D3"
                    onClick={() => {
                        const username: string = getSetting("username")
                        const comments_only: boolean = getSetting("comments_only");
                        validUsername(username)
                            /* Checks to see if the username is valid before fetching*/
                            .then(async (realUser) => {
                                if (!realUser) {
                                    promptInputError("Please enter a real username")
                                    return
                                }
                            /* Start fake progress text */
                                fakeProgress(undefined, () => { setStatus(progress.next().value) })
                                const params: GenerationConfig = getGenerationConfig();
                                /**
                                 * Redirects the user to the freshly generated posts
                                 * @param result The generated responses
                                 */
                                const showPost = (result: GeneratedText) => {
                                    setStatus("Done!")
                                    const loadResults = (setting: keyof GeneratedText) => {
                                        return result.hasOwnProperty(setting) ? result[setting] : params[setting]
                                    }
                                    const url: string = `/post` + [comments_only, username, loadResults('subreddit'), loadResults('prompt'), loadResults('response')].reduce(
                                        (query, setting) => query + "/" + encodeURIComponent(setting),
                                        ""
                                    )
                                    router.push(url)
                                }
                                const genText = await generate(params)
                                showPost(genText)

                            })
                    }}>Generate</Button>
            </div>
            <Progress status={status} />
        </>
    )
}
