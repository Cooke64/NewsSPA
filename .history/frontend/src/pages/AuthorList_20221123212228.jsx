import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import PostList from 'components/PostList';
import api from 'api';
export default function AuthorList() {
  const {username} = useParams();
  const posts = api.getPostList({postAuthor: username})
con
  return (
    <div>Youre looking to author {username}
        {/* {<PostList posts={posts}/>} */}
     </div>
    
  )
}
