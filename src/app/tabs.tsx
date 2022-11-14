import Image from 'next/image'
/* TODO: Replace .png assets with .svg after svg loading on versions after 13.02
bug is fixed. See the below link for more details:
https://github.com/vercel/next.js/issues/42443
*/
import Gear from '@/assets/gear.png'
import Github from '@/assets/github.png'


import styles from "@/app/tabs.module.css"

export default function Icons() {
  return (
    <div className={styles.tabs}>
      <Image src={Github} alt="Github Project"></Image>
      <Image src={Gear} alt="Settings"></Image>
    </div>
  )
}