import Tab from "@/components/post/tab"
import Box from "@/components/post/box"
import styles from "@/components/post/post.module.css"
import Image from 'next/image'
import Article from "./article"
import { CSSProperties } from "react"



/* The page parameters for showing a post*/
export type PostParams = {
  comments_only: boolean,
  username: string,
  subreddit: string,
  prompt: string,
  response: string
}

export const DefaultPost: PostParams = {
  comments_only: false,
  username: "SnooSpoof", 
  subreddit: "SnooSpoof",
  prompt: "Default Post",
  response: "If you see this message, then a post has been made without any fetch calls."
}

/**
 * Displays the following text:
 * r/Subreddit Posted by u/Username
 * on top of the post submission
 * @param subreddit The subreddit display
 * @param username The username display
 * @size The font size of our header. Defaults to 0.8125 rem.
 * @returns 
 */
export function Headers(
  { subreddit, username, size = "0.8125rem" }:
    { size?: string } & Pick<PostParams, "subreddit" | "username">) {
  const sizing = {
    fontSize: size
  } as CSSProperties
  {
    return (
      <p className={styles.headerContainer}><span className={styles.rSubreddit} style={sizing}>r/{subreddit}</span>   <span className={styles.uUsername} style={sizing}>Posted by u/{username}</span></p>
    )
  }
}

/**
 * Displays the comment reply or the post main content, where each line break creates a new paragraph tag.
 * @param response Any string
 * @returns Multiple JSX paragraph elements
 */
export function Response(
  { response }:
    Pick<PostParams, "response">) {
  return<>
    {response.split("\n").map
      ((text, index) =>
        <p key={index} className={styles.response}>{text}</p>)}
  </>

}

/**
 * Create a line seperating the comments and the post
 * @param length The length of our line
 * @returns 
 */
export function Seperator({length="80%"}: {length?: string}) {
  return <hr className={styles.seperator} style={{"--seperator-length": length} as CSSProperties}></hr>
}

/**
 * Appends "_BOT" to a username to inform them that the user is not real
 * @param username Any username
 * @returns A BOT variant of username
 */
function BOT(username: string) : string  {
  return `${username}_BOT`
}

/**
 * Displays a Submission Post
 * @param subreddit Where the post was made
 * @param username Who made the post
 * @param prompt Title of post
 * @response Main content of post
 * @returns
 */
export function Submission({subreddit, username, prompt, response}: 
  Pick<PostParams, "subreddit" | "username" | "prompt" | "response">) {
  return (
    <section>
          <Headers subreddit={subreddit} username={BOT(username)} />
          <Article headline={prompt}
            size="1.5625rem" style={{ margin: "1% 2.5%", lineHeight: 1.15 } as CSSProperties}>
            <Response response={response} />
          </Article>
          <br/>
          <Seperator length="90%"/>
          <br/>
          <br/>
          <br/>
    </section>
  )
}

export function Vertical({length="80%"}: {length?: string}) {
  return <div className={styles.vertical} style={{"--vertical-length": length} as CSSProperties}></div>
}

export function Comment({username, comment}: {username: string, comment: string}) {
  return (
    <Article headline={username} size="15px"
        style={{ margin: "15px 2.5%", lineHeight: 1.15 } as CSSProperties}>
        <p style={{fontSize: "15px", marginTop: "20px"} as CSSProperties}>{comment}</p>
    </Article>
  )
}

export function SideProfile({color, ...passthrough}: {color: "blue" | "grey" | "orange" | "white",} & React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <>
      <Image style={{margin: "7px auto"}}alt={`${color}Profile`} src={`/${color}Profile.svg`}  height={40} width={39} {...passthrough}></Image>
      <Vertical></Vertical>
    </>
  )
}

export function Post(
  { comments_only, username, subreddit, prompt, response }:
  PostParams
) {
  return (
    <Box style={
      {
        marginTop: "2vh",
        marginBottom: "2vh",
        width: "75vw",
        minWidth: "calc(6.5rem + 36px)",
        maxWidth: "40rem"
      } as CSSProperties
    }>
      <Tab>
        {comments_only && <SideProfile color="grey"/>}
      </Tab>
      {comments_only
        ? <section>
          <Comment username="Autofill" comment={prompt}/>
          <Box style={{marginLeft: 0, border: 0}}>
            <Tab>
              <SideProfile color="blue"/>
            </Tab>
            <Comment username={BOT(username)} comment={response}/>
          </Box>
        </section>
        : <Submission subreddit={subreddit} username={username} prompt={prompt} response={response} />
      }
    </Box>
  )
}