import React from 'react'
import CommentForm from './CommentForm'
import MyButtons from './UI/buttons/MyButtons'
import useAuth from 'hooks/useAuth'


export default React.memo(function CommentItem({comments, createComment, removeComment,id }) {
const {isAuth} = useAuth()
  return (
    <div>
    {isAuth.isUser  && <CommentForm post={id} createPost={createComment}/>}
        {comments.map(item => 
        (<div key={item.id}> {item.id}.  {item.text}
        {(isAuth.isUser && item.author === isAuth.username)   && 
        <MyButtons onClick={() => removeComment(item.id)} style={{float:'right'} }>
          Удалить комментарий
        </MyButtons>
      }
      <hr />
      </div>)
    )}
    </div>

  )
})
