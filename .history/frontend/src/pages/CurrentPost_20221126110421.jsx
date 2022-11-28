import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import MyButtons from '../components/UI/buttons/MyButtons';
import api from 'api';
import AuthContext from '../utils/context'
import CommentItem from 'components/CommentItem';
import LikeCheckBox from 'components/UI/buttons/LikeCheckBox';
import StarRating from 'components/UI/rating/StarRating';


export default function CurrentPost() {
  const {id} = useParams();
  const [checked, setChecked] = useState(false);
  const [post, setPost] = useState([])
  const [comments, setComment] = useState([])
  const {isAuth} = useContext(AuthContext)
  const navigate = useNavigate();
  const [ratingValue, setRatingValue] = useState(0);
  const [isDisabledRating, setisDisabledRating] = useState(false);
  const [voted]

  const createComment = (commentData) => {
    setComment([...comments, commentData])
  }


  const handleChange = () => {
    checked 
    ?api.removeFavorite(id).then(() => setChecked(false))
    :api.addInFavorite(id).then(() => setChecked(true))
  };


  const onChangeRating = (newRatingValue) => {
    console.log(newRatingValue)
    setRatingValue(newRatingValue)
  }

  useEffect(()=> {
    const post = api.getCurrentPost(id)
    
    post.then(function(result) {

        setChecked(result['is_favorited'])
        setPost(result)
        setComment(result['comments'])
    })  
  }, [id, comments.length, checked, ratingValue])


  const removeComment = (commentId) =>{
    api.removeComment({commentId, id})
    setComment(comments.filter(p => p.id !== commentId))
  }
  return (
    <div>
      <p>{post.title} оценен пользователями на </p>
      <hr />
      <p>{post.body}</p>
      <StarRating onChange={onChangeRating} value={ratingValue}/>
        {(isAuth.isUser && post.author === isAuth.username)  && <Link to={`/post/${id}/edit`}>
          <MyButtons>Редактировать пост</MyButtons>
        </Link>}
        <MyButtons onClick={() => navigate(-1)}>Назад</MyButtons>
        {isAuth.isUser && <LikeCheckBox handleChange={handleChange} checked={checked || false}/>}

        <h3>Комментарии</h3>
        <CommentItem 
            removeComment={removeComment} 
            id={id} createComment={createComment}
            comments={comments} 
            key={id}
        />
    </div>
    
  )
}
