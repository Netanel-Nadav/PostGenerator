import React from 'react'
import { PostDetails } from './PostDetails'

interface IProps {
    posts: any
}


export const PostList: React.FC<IProps> = ({ posts }) => {
    return (
        <section className="post-list">
            {posts.map((post: any) => ( <PostDetails post={post} key={post._id} /> ))}
        </section>
    )
}
