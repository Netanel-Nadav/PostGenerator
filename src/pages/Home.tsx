import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { UserRequest } from '../components/UserRequest';
import { PostList } from '../components/PostList';
import { RootState } from '../store';
import { PostChoice } from '../components/PostChoice';

export const Home: React.FC = () => {

    const posts = useSelector((state: RootState) => state.post.posts);
    
    const [kindOfContent, setKindOfContent] = useState<string>()
    
    
    return (
        <div className="home">
            <PostChoice setKindOfContent={setKindOfContent} />
            <UserRequest kindOfContent={kindOfContent} />
            {posts && <PostList posts={posts} />}
        </div>
    )
}
