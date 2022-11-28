import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import PostList from 'components/PostList';

export default function AuthorList() {
  const {username} = useParams();
  return (
    <div>Youre looking to author {username}
        {<PostList posts={sortedSelectPosts} remove={removePost} getUser={getUser}/>}
     </div>
    
  )
}
