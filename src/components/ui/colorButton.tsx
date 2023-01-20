import { CSSProperties } from "react";
import pSBC from "@/components/ui/pSBC";

/* For colours that are calculated by the client but remain static throughout the application state,
   these calculations should rather be generated as a server component */

/**
 * Generates color variables("--button-color, --brighten-button, --text-color") on a button.
 * @param color "Any valid CSS color property"
 * @returns Assigned CSS variables as styling
 */
export default function Coloring(color: string) {
	const coloring = {
		"--button-color": color,
		"--brighten-button": pSBC(0.11, color, false, true), /* Lighten "color" by 11% */
		"--text-color": "white",
	} as CSSProperties
	return coloring;
}