import React, {useState, useEffect} from 'react'
import MyButtons from '../components/UI/buttons/MyButtons';
import MyInput from '../components/UI/input/MyInput';
import axios from 'axios';
import { useParams} from 'react-router-dom'
import { Navigate } from 'react-router-dom';

export default function EditPost(create) {
  const 
  const {id} = useParams();
  const [postEdit, setPostEdit] = useState({
    title: '',
    body: ''

  })
  
  function getPost () {
    const data = axios.get(`http://127.0.0.1:8000/api/posts/` + id)
    data.then(function(res) {
      setPostEdit(res.data)
    })
  }

  useEffect(() => {
    getPost()
  }, [id])

 function putPostData () {
  console.log('work')
    axios({
      method: 'put',
      url: `http://127.0.0.1:8000/api/posts/${id}/`,
      data: postEdit,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(function(response) {
      (<Navigate to=`http://127.0.0.1:8000/api/posts/${id}/` replace={true} />)
      console.log('Ответ сервера успешно получен!');
    })
    .catch(function(error) {
      console.log(error);
    });
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
