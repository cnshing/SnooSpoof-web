import './globals.css'
import { Noto_Sans_Display, IBM_Plex_Sans } from 'next/font/google';
import Image from 'next/image'
import Sidebar from "@/components/sidebar/sidebar"
import ShareSidebar from "@/components/sidebar/manageSidebar"
import Icons from "@/app/tabs"
import Github from "@/app/github"
import Gear from "@/components/tabs/gear"

const noto_sans = Noto_Sans_Display({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  display: 'swap'
})

const ibm_plex_sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ["500", "600"],
  variable: '--font-ibm-plex-sans',
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${noto_sans.className} ${ibm_plex_sans.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ShareSidebar>
          <Icons>
            <Github/>
            <Gear requires={['openSettings']}>
              <Image src="/gear.svg" width="57" height="57" alt="Settings"></Image>
            </Gear>
          </Icons>
          <Sidebar requires={['isVisible', 'closeSettings']}/>
        </ShareSidebar>
        {/* Clear right to ensure floated elements stay at the correct position */}
        <div style={{clear: "right"}}>{children}</div>
      </body>
    </html>
  )
}
