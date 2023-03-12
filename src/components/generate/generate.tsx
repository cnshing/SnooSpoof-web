'use client';
import styles from "@/components/generate/generate.module.scss"
import { CSSProperties, useEffect, useState } from "react"
import Button from "@/components/ui/button"
import { Input } from "@/components/ui/fields"
import { updateSetting, generate, getGenerationConfig, getSetting } from "@/components/generate/manageGenerate";
import { iterateProgress, Progress, fakeProgress } from "@/components/generate/progress"

/**
 * Call to action for entering username and generating text
 */
export default function GenerateBar() {

    const buttonWidth: CSSProperties = {
        "--button-width": "132px" /* Share button width values to use in CSS calculations for better "look and feel"*/
    } as CSSProperties;

    useEffect(
        () => {
            updateSetting("username", "") /* On first load empty the username*/
        }
        , []
    )

    /**
     * Asks reddit if the username is valid.
     * @param username A reddit username
     * @returns A Promise resolving to the validity of the user. Returns false if is reddit is unavaliable.
     */
    async function validUsername(username: string): Promise<boolean> {
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
    const unqiueGenId: string = "usernameInput"

    const updateUsername = (user: string): string => {
        updateSetting("username", user)
        return user;
    }

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
                        validUsername(username)
                            .then((realUser) => {
                                if (!realUser) {
                                    promptInputError("Please enter a real username")
                                    return
                                }
                                fakeProgress(undefined, () => { setStatus(progress.next().value) })
                                generate(getGenerationConfig())
                                    .then(result => {
                                        setStatus(progress.next().value)
                                        console.log(result);
                                    })

                            })
                    }}>Generate</Button>
            </div>
            <Progress status={status} />
        </>
    )
}
