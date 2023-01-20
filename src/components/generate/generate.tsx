'use client';
import styles from "@/components/generate/generate.module.scss"
import { ChangeEvent, useState, CSSProperties } from "react"
import Button from "@/components/ui/button"

/**
 * Call to action for entering username and generating text
 */
export default function GenerateBar() {

    const [username, setUsername] = useState<string>("");
    function changeUsername(event: ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    const buttonWidth: CSSProperties = {
        "--button-width": "132px" /* Share button width values to use in CSS calculations for better "look and feel"*/
    } as CSSProperties;

    return (
        <div className={`${styles.container} ${styles.font}`} style={buttonWidth}>
            <span className={`${styles.prefix}`}>/u/</span>
            <input className={`${styles.username}`} type="text" value={username} placeholder="Username" pattern="[A-Za-z0-9_-]+"
                onChange={changeUsername}></input>
            <Button style={
                {
                    "width": "var(--button-width)" /* Override default button width */
                } as CSSProperties
            }
                color="#0079D3">Generate</Button>
        </div>
    )
}
