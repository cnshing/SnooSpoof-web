'use client';
import { useState } from "react";
import ShareObject from "@/components/state/share"

export type readSidebar = {
  /**
 * Is the sidebar visible?
 */
  isVisible: boolean
}
export type updateSidebar = {
  /**
   * Send a request to open the Sidebar. Return true if the request was succesful, otherwise false.
   */
  openSettings: () => boolean;
  /**
   * Send a request to close the Sidebar. Return true if the request was succesful, otherwise false.
   */
  closeSettings: () => boolean;
}

export type manageSidebar = updateSidebar & readSidebar;


export function useSidebar() {
  const sidebar = {} as manageSidebar;
  const [isVisible, setVisibility] = useState(false);
  sidebar.isVisible = isVisible;
  let prevToggle: number = 0;
  function toggleSettings(Visibility: boolean) {
    const updateToggle: number = Date.now();
    /* Clicking on a button that simulatenously opens the settings and is outside the
    sidebar will lead to the settings opening and closing instantly(within 1-2 ms between both requests). 
    A timer that blocks such requests can prevent that.*/
    const validToggle: boolean = isVisible != Visibility && updateToggle - prevToggle > 5;
    if (validToggle) {
      setVisibility(Visibility);
    }
    prevToggle = updateToggle;
    return validToggle;
  }

  sidebar.openSettings = () => {
    return toggleSettings(true)
  }
  sidebar.closeSettings = () => {
    return toggleSettings(false)
  }
  return sidebar;
}

/**
 * Any functional component that requires interaction with the Sidebar can place itself
 * under the ShareSidebar element. Specifically, they can request
 * an property from manageSidebar by explictly passing a prop requires=Array<string>,
 * where the array matches the key values of manageSidebar.
 */
export default function ShareSidebar({ children }: { children: React.ReactNode }) {
  const sidebar: manageSidebar = useSidebar();
  return (
    <ShareObject object={sidebar}>
      {children}
    </ShareObject>
  )
}
