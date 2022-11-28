import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import PostList from 'components/PostList';
import api from 'api';
export default function AuthorList() {
    const [posts, setPosts] = 
  const {username} = useParams();
  const posts = api.getPostList({postAuthor: username})
console.log(posts)
  return (
    <div>Youre looking to author {username}
        {/* {<PostList posts={posts}/>} */}
     </div>
    
  )
}
