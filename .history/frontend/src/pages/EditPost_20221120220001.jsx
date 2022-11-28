import React, {useState, useEffect} from 'react'
import MyButtons from '../components/UI/buttons/MyButtons';
import MyInput from '../components/UI/input/MyInput';
import { Navigate } from 'react-router-dom';
import { useParams} from 'react-router-dom'
import api from 'api';

export default function EditPost(create) {
  const {id} = useParams();
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [postEdit, setPostEdit] = useState({
    title: '',
    body: ''
  })
  
  useEffect(()=> {
    const post = api.getCurrentPost(id)
    post.then(function(result) {
        setPostEdit(result)
    })  
  }, [id,])

 function putPostData (e) {
      e.preventDefault()
      const title = postEdit.title
      const body = postEdit.body
      api.updatePost({title, body, id})
      setShouldRedirect(true)
  }

  return (
    <div>
      <div className="mb-3">
        <form onSubmit={e => putPostData(e)}>
        {shouldRedirect && <Navigate replace relative={}/>}
            <MyInput 
                defaultValue={postEdit.title}
                onChange={e => setPostEdit({...postEdit, title: e.target.value})} 

            />
            <MyInput
                
                defaultValue={postEdit.body}
                onChange={e => setPostEdit({...postEdit, body: e.target.value})}  
            />
            <MyButtons>Обновить</MyButtons>
    </form>
  </div>
    </div>
  )
}
