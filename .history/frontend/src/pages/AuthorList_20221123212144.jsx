import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import PostList from 'components/PostList';
import api from 'api';
export default function AuthorList() {
  const {username} = useParams();
  const post = api.getPostList({postAuthor: username})

  return (
    <div>Youre looking to author {username}
        {<PostList posts={post}/>}
     </div>
    
  )
}
