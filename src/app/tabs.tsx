
/* TODO: Replace inline public svg assets with direct svg imports. See the below links for more details:
https://github.com/vercel/next.js/issues/42443
https://github.com/vercel/next.js/issues/43714
*/
import styles from "@/app/tabs.module.css"
import {ReactNode} from 'react'

export default function Icons({children}: {children: ReactNode}) {
  return (
    <div id="tabs" className={styles.tabs}>
      {children}
    </div>
  )
}