
import Title from "@/app/title"
import GenerateBar from "@/components/generate/generate"
import Article from "@/components/post/article"
import Tab from "@/components/post/tab"
import Box from "@/components/post/box"
import { Fragment, CSSProperties } from "react"
export default function Home() {
  
  return (
    <Fragment>
    <Title></Title>
    <GenerateBar></GenerateBar>
    <Box style={
                {
                  marginTop: "calc(max(4rem, 3.5vh)/2)",
                  width: "75vw",
                  minWidth: "calc(6.5rem + 36px)",
                  maxWidth: "40rem"
                } as CSSProperties
            }>
      <Tab>
      </Tab>
      <Article headline="What is SnooSpoof?"
               size="28px">
              <p>SnooSpoof lets anyone generate impressions of a reddit user of their choosing. Simply enter an username, press “Generate”, and let the AI magic do its work!</p>
              <p>SnooSpoof assumes zero technical knowledge on your end, only that a reddit username be given. But those who want to tinker around by changing the subreddit type, initial prompt, and more can do so by selecting the ⚙ icon.</p>
              <p>Under the hood, an existing base model (GPT-2) is finetuned on a freshly created dataset. Check out Github for more details!`</p>
              </Article>
    </Box>
    </Fragment>
  )
}
