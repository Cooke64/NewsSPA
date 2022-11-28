import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import MyButtons from '../components/UI/buttons/MyButtons';
import CommentForm from '../components/CommentForm';

export default function CurrentPost() {
  const {id} = useParams();
  const [post, setPost] = useState([])
  const [comment, setComment] = useState([])
  const navigate = useNavigate();

  const moveback = () => {
    navigate(-1)
  }
   async function getPost () {
    const { data } = await axios.get(`http://127.0.0.1:8000/api/posts/` + id)
    console.log(data)
    return data
  }

  
  useEffect(()=> {
    const post = getPost()
    
    post.then(function(result) {
        setPost(result)
        )
    })

        }, [id])
        
  return (
    <div>
        {post.title}
        {post.body}
        <Link to={`/post/${id}/edit`}><MyButtons>Едит пост</MyButtons></Link>
        <MyButtons onClick={moveback}>Back</MyButtons>  
        <h3>Комментарии</h3>
        <CommentForm post_id={id}/>
        {comment.map(item => 
          (<div key={item.id}>  {item.text}<hr /></div>)
        )}
    </div>
    
  )
}
