import React, {useState} from 'react'
import MyButtons from './UI/buttons/MyButtons'
import MyInput from './UI/input/MyInput'


export default function PostForm ({create}) {

const [post, setPost] = useState({body: '', title: '', tags: []})


const addNewPOst = (e) => {
    e.preventDefault()
    create(post)
    setPost({body: '', title: ''})
}
  return (
    <div className="mb-3">
        <form>
            <MyInput 
                onChange={e => setPost({...post, title: e.target.value})}
                value={post.title} 
                placeholder='Добавить заголовок'
                autoComplete="off"

            />
            <MyInput
                onChange={e => setPost({...post, body: e.target.value})} 
                value={post.body} 
                placeholder='Добавить текст'
                autoComplete="off"
            />
            <MyButtons onClick={addNewPOst}>Добавить</MyButtons>
    </form>
  </div>
  )
}
