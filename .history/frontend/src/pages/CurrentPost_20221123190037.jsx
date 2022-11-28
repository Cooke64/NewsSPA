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
  console.log(post)
  return (
    <div>
        {post.title}
        {post.body}
        {(isAuth.isUser && post.comments === isAuth.username)  && <Link to={`/post/${id}/edit`}><MyButtons>Едит пост</MyButtons></Link>}
        <MyButtons onClick={moveback}>Back</MyButtons>  
        <h3>Комментарии</h3>
        {isAuth.isUser  && <CommentForm post={id} createPost={createComment}/>}
        {comments.map(item => 
          (<div key={item.id}> {item.id}.  {item.text}
          {isAuth.isUser  && 
          <MyButtons onClick={() => removeComment(item.id)} style={{float:'right'} }>
              Удалить комментарий
          </MyButtons>
          }
          <hr />
          </div>)
        )}
    </div>
    
  )
}
