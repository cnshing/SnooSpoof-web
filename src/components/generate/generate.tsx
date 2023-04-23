'use client';
import { useRouter } from 'next/navigation';
import styles from "@/components/generate/generate.module.scss"
import { CSSProperties, useEffect, useState } from "react"
import Button from "@/components/ui/button"
import { Input } from "@/components/ui/fields"
import { updateSetting, generate, getGenerationConfig, getSetting, GenerationConfig, GeneratedText } from "@/components/generate/manageGenerate";
import { iterateProgress, Progress, fakeProgress } from "@/components/generate/progress"
import { DefaultPost, PostParams } from '../post/post';

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
function updateUsername(user: string): string {
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

    /**
     * Start animating visual indictators to show that generation request is in progress
     */
    const animateProgress = () => {
        /* Start fake progress text */
        fakeProgress(undefined, () => { setStatus(progress.next().value) })
    }

    /**
    * Redirects the user to the freshly generated posts
    * @param fetched The generated responses
    * @param params The initial configuration to generate text
    */
    const showPost = (fetched: GeneratedText, initialRequest: GenerationConfig) => {
        setStatus("Done!")
        // TODO: Investigate TypeScript Error
        const results: PostParams = DefaultPost
        for (var param in results) {
            results[param] = {...initialRequest, ...fetched}[param]
        }
        const url: string = `/post` + Object.values(results).reduce(
            (query, setting) => query + "/" + encodeURIComponent(setting),
            ""
        )
        router.push(url)
    }

    /**
     * Main handler responsible for validating usernames, animating progress indicators and fetching/redirecting
     * the generated post
     */
    const onGenerate = () => {
        const username: string = getSetting("username")
        validUsername(username)
            /* Checks to see if the username is valid before fetching*/
            .then(async (realUser) => {
                if (!realUser) {
                    promptInputError("Please enter a real username")
                    return
                }
                animateProgress()
                const genRequest: GenerationConfig = getGenerationConfig();
                const genText = await generate(genRequest)
                showPost(genText, genRequest)
            })
    }

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
                    onClick={onGenerate}>Generate</Button>
            </div>
            <Progress status={status} />
        </>
    )
}
