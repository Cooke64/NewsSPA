import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import MyButtons from '../components/UI/buttons/MyButtons';
import CommentForm from '../components/CommentForm';
import api from 'api';
import { AuthContext } from '../utils/context'



export default function CurrentPost() {
  const {id} = useParams();
  const [post, setPost] = useState([])
  const [comments, setComment] = useState([])
  const {isAuth, setisAuth} = useContext(AuthContext)
  const navigate = useNavigate();

  const moveback = () => {
    navigate(-1)
  }

  const createComment = (commentData) => {
    setComment([...comments, commentData])
  }


  useEffect(()=> {
    const post = api.getCurrentPost(id)
    
    post.then(function(result) {
        setPost(result)
        setComment(result['comments'])
    })  
  }, [id, comments.length])


  const removeComment = (commentId) =>{
    api.removeComment({commentId, id})
    setComment(comments.filter(p => p.id !== commentId))
  }

  return (
    <div>
      <p>{post.title}</p>
      <p>{post.body}</p>
        {(isAuth.isUser && post.author === isAuth.username)  && <Link to={`/post/${id}/edit`}>
          <MyButtons>Редактировать пост</MyButtons>
        </Link>}
        <MyButtons onClick={() => navigate(-1)}>Назад</MyButtons>  
        <h3>Комментарии</h3>
       
    </div>
    
  )
}
