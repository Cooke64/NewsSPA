import React, {useState, useEffect} from 'react'
import MyButtons from '../components/UI/buttons/MyButtons';
import MyInput from '../components/UI/input/MyInput';
import axios from 'axios';
import { useParams} from 'react-router-dom'
import api from 'api';

export default function EditPost(create) {
  const {id} = useParams();
  const [postEdit, setPostEdit] = useState({
    title: '',
    body: ''

  })
  
  useEffect(()=> {
    const post = api.getCurrentPost(id)
    
    post.then(function(result) {
        setPostEdit(result.data)
    })  
  }, [])

 function putPostData () {
      api.updatePost(postEdit.title, postEdit.body, id)
  }

  return (
    <div>
      <div className="mb-3">
        <form onSubmit={putPostData}>
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
