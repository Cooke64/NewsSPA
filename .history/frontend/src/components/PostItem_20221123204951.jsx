import React, {useContext} from 'react'
import MyButtons from './UI/buttons/MyButtons'
import {Link } from 'react-router-dom';
import { AuthContext } from 'utils/context';


export default function PostItem({item, remove, callback}) {
  const {isAuth, setisAuth} = useContext(AuthContext)
  



  return (
    <div className='post'>
        <strong>{item.id}.{item.title} </strong>
        <p onClick={() =>selectAuthorPosts(item.author)}>by {item.author}</p>
        <div>{item.body}</div>
        <Link to={`/post/${item.id}`}><MyButtons>Открыть</MyButtons></Link>
        {(isAuth.isUser && item.author === isAuth.username) &&
            <MyButtons onClick={() => remove(item.id)}>Удалить</MyButtons> 
        }

    </div>
  )
}
