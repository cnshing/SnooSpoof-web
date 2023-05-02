'use client';
import { manageSidebar } from "@/components/sidebar/manageSidebar"


/**
 * Gear component containerizes the gear image asset (as a children prop)
 * in order to follow Server-Client-Server component rendering pattern
 * @param openSettings A function that is supposed to open the settings
 * @returns 
 */
export default function Gear({ openSettings, children }: Pick<manageSidebar, 'openSettings'> & { children: React.ReactNode }) {
    return (
        <button onClick={openSettings}>
            {children}
        </button>
    )
}