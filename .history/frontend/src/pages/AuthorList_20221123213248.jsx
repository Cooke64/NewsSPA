import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import PostList from 'components/PostList';
import api from 'api';
export default function AuthorList() {

    const [posts, setPosts] = React.useState([])
    const {username} = useParams()

    function getPostsByUsername(){
        api.getPostList(username)
        .then((result) => {setPosts([result])})
    }

    React.useEffect(() => {
        getPostsByUsername()
    }, [])
  return (
    <div>Youre looking to author {username}
        {<PostList posts={posts.result}/>}
     </div>
    
  )
}
