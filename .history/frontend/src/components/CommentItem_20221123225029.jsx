import React from 'react'

export default function CommentItem({isAuth,}) {
  return (
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
  )
}
