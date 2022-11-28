import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import MyButtons from '../components/UI/buttons/MyButtons';
import CommentForm from '../components/CommentForm';

export default function CurrentPost() {
  const {id} = useParams();
  const [post, setPost] = useState([])
  const [comments, setComment] = useState([])
  const navigate = useNavigate();

  const moveback = () => {
    navigate(-1)
  }

  async function getPost () {
    const { data } = await axios.get(`http://127.0.0.1:8000/api/posts/` + id)
    return data
  }

  const createComment = (commentData) => {
    setComment([...comments, commentData])
  }

  useEffect(()=> {
    const post = getPost()
    
    post.then(function(result) {
        setPost(result)
        setComment(result['comments'])
    })  
  }, id, comments])

  const removeComment = (commentId) =>{
    axios.delete(`http://127.0.0.1:8000/api/posts/${id}/comments/` + commentId);
  }
        
  return (
    <div>
        {post.title}
        {post.body}
        <Link to={`/post/${id}/edit`}><MyButtons>Едит пост</MyButtons></Link>
        <MyButtons onClick={moveback}>Back</MyButtons>  
        <h3>Комментарии</h3>
        <CommentForm post_id={id} createPost={createComment}/>
        {comments.map(item => 
          (<div key={item.id}>{item.id}.  {item.text} 
          <MyButtons onClick={e => removeComment(item.id)} style={{float:'right'} }>Удалить комментарий</MyButtons>  
          <hr />
          </div>)
        )}
    </div>
    
  )
}
