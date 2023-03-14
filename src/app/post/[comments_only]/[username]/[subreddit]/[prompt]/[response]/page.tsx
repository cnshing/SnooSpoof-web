import {Post, PostParams} from "@/components/post/post";

/**
 * Main post page
 * @param params The parameters required to show a generated post 
 * @returns 
 */
export default function Page({
    params,
  }: {
    params: { [K in keyof PostParams]: string};
  }) {
    return <Post
                comments_only={params.comments_only === 'true'}
                username={params.username}
                /* The first two parameters are equivalent on encode*/
                subreddit={decodeURIComponent(params.subreddit)}
                prompt={decodeURIComponent(params.prompt)}
                response={decodeURIComponent(params.response)}
            />
  }