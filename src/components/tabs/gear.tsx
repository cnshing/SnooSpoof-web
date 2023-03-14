'use client';
import { manageSidebar } from "@/components/sidebar/manageSidebar"



export default function Gear({ openSettings, children }: Pick<manageSidebar, 'openSettings'> & { children: React.ReactNode }) {
    return (
        <button onClick={openSettings}>
            {children}
        </button>
    )
}