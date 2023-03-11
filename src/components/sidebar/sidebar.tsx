'use client';
import styles from "@/components/sidebar/sidebar.module.scss"
import { useRef, useCallback, useEffect, useMemo } from "react";
import { manageSidebar } from "@/components/sidebar/manageSidebar"
import { updateSetting, getSetting, GenerationKeys, GenerationValues, GenerationConfig, defaultConfig } from "@/components/generate/manageGenerate"
import Article from "@/components/post/article"
import { Input, Textarea, Checkbox } from "@/components/ui/fields"


export default function Sidebar({ isVisible, closeSettings }: Partial<manageSidebar>) {

  /* Animations */
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

  /* Look and feel */
  const articleSize: string = "clamp(150%, 1.4375rem, 1.75rem)"
  /* At 1920 px width, set to 1.75rem. Linearly transition to 1.1875 rem at 1010px width.*/
  const checkboxSize: string = "clamp(1.1875rem, 2.374313186813187rem + -0.9890109890109889vw, 1.75rem)"
  /* Retrieve the settings saved from the previous session*/
  const settings: Omit<GenerationConfig, 'username'> = useMemo( //useMemo ensures these settings are fetched only once on first load
    () => {
      /* 
      Retrieves the following settings into a JS object:
      https://stackoverflow.com/questions/1117916/merge-keys-array-and-values-array-into-an-object-in-javascript
      */

      const { username, ...initialSettings } = defaultConfig;

      return getSetting(Object.keys(initialSettings) as Omit<GenerationKeys, 'username'>[])

    },
    []);

  const saveOption = (setting: GenerationKeys) => (value: GenerationValues) => {
    updateSetting(setting, value);
    return value;
  }

  const loadCheckbox = (setting: GenerationKeys<boolean>): boolean => {
    /* When loading the checkbox from local storage, new users will have never saved the
    settings to local storage. Thus, getSettings will return "null" as no such data exists. 
    In that case, simply return the default configuration. This function
    should not be required if the initial loading of our stored data checks for these null values.
    */
    const value: boolean = settings[setting]
    return value === null ? defaultConfig[setting] : value
  }

  return (
    <aside ref={sidebarRef} className={`${styles.sidebar} ${animateSidebar}`}>
      <div>
        <Article headline="Subreddit"
          size={articleSize}>
          <p>Lets the text correspond to a given subreddit. A valid subreddit is not required.</p>
        </Article>
        {/* FIXME: Ensure type compatibility with general input value function and save function */}
        <Input initialValue={settings['subreddit']} composeValue={saveOption("subreddit")} placeholder="all" />
      </div>
      <div>
        <Article headline="Autofill"
          size={articleSize}>
          <p>Autocompletes the initial prompt. Enable "Comments Only" to reply to your prompt instead.</p>
        </Article>
        <Textarea initialValue={settings["prompt"]} composeValue={saveOption("prompt")} style={{ height: "10rem" }} placeholder="My prompt goes here..." />
      </div>
      <div>
        <Article headline="Tags"
          size={articleSize}>
          <p>Shift content to be more associated with these tags.</p>
        </Article>
        <Checkbox initialChecked={loadCheckbox("comments_only")} composeChecked={saveOption("comments_only")} label="Comments Only" checkboxSize={checkboxSize} />
        <Checkbox initialChecked={loadCheckbox("is_original_content")} composeChecked={saveOption("is_original_content")} label="Original Content" checkboxSize={checkboxSize} />
        <Checkbox initialChecked={loadCheckbox("over_18")} composeChecked={saveOption("over_18")} label="NSFW" checkboxSize={checkboxSize} />
      </div>
    </aside>
  )
}
