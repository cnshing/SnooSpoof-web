'use client';
import styles from "@/components/sidebar/sidebar.module.scss"
import { useRef, useCallback, useEffect } from "react";
import { manageSidebar } from "@/components/sidebar/manageSidebar"


export default function Sidebar({ isVisible, closeSettings }: Partial<manageSidebar>) {

  const sidebarRef = useRef<HTMLElement>(null);
  const sidebar: HTMLElement | null = sidebarRef.current;
  const exitSidebar = useCallback(
    (event: MouseEvent) => {
      if (!sidebar?.contains(event.target as Node) && closeSettings && closeSettings()) {
        //closeSettings returns true if the close request was successful
        document.removeEventListener("click", exitSidebar);
      };
    },
    [isVisible]
  )

  useEffect(
    () => {
      if (sidebar !== null && isVisible) {
        document.addEventListener("click", exitSidebar); //Listen for clicks outside the sidebar incase the user wants to exit

        const disableAnimation = () => {
          /* When resizing the window, the sidebar becomes temporarily displaced
          due to simulatenous width and translateX changes. Disabling the animations
          as soon as it ends allows for smoother resizing. */
          sidebar.classList.add(styles.disableAnimation);
          sidebar.removeEventListener("transitionend", disableAnimation);
        }
        sidebar.addEventListener("transitionend", disableAnimation);

      }
    },
    [isVisible]
  )

  const animateSidebar: string = isVisible ? styles.openSidebar : styles.closeSidebar;

  return (
    <aside ref={sidebarRef} className={`${styles.sidebar} ${animateSidebar}`}>
      <section>Test1</section>
      <section>Test2</section>
    </aside>
  )
}
