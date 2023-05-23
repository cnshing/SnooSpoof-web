'use client';
import {Post, DefaultPost} from "@/components/post/post";

/**
 * Main post page
 * @returns 
 */
export default function Page() {
    var post = DefaultPost
    if (typeof window !== "undefined") {
      /* Depedency on 'results' being saved under showPost in generate.tsx*/
      const results = window.localStorage.getItem('results')
      if (results !== null) post = JSON.parse(results)         
  }
    return <Post
                comments_only={post.comments_only}
                username={post.username}
                /* The first two parameters are equivalent on encode*/
                subreddit={post.subreddit}
                prompt={post.prompt}
                response={post.response}
            />
  }