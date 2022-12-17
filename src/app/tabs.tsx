
/* TODO: Replace .png assets with .svg after svg loading on versions after 13.02
bug is fixed. See the below link for more details:
https://github.com/vercel/next.js/issues/42443
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