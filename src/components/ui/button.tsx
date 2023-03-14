'use client';
import styles from "@/components/ui/button.module.css"
import { ButtonHTMLAttributes } from "react";
import Coloring from "./colorButton";

/**
 * 
 * @param color "Color of the button. Defaults to #0079D3"
 * @param passthrough "Set any attributes as normally set to a button element"
 * @returns A white-text button that lights up when hovered.
 */
export default function Button(
    { children, color = "#0079D3", ...passthrough }:
        { children?: React.ReactNode, color?: string } & ButtonHTMLAttributes<HTMLButtonElement>
) {
    return (
        <button className={styles.button} {...passthrough} style={{ ...Coloring(color), ...passthrough['style'] }}>
            {children}
        </button>
    )
}
