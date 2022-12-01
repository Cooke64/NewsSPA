import React, {useState} from 'react'
import MyButtons from './UI/buttons/MyButtons'
import MyInput from './UI/input/MyInput'
import MultipleSelectCheckmarks from './UI/Select'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function PostForm ({create}) {

const [post, setPost] = useState({body: '', title: '',})
const [tags, setTags] = React.useState([]);
const [newTag, setNewTag] = React.useState('')


const handleChange = (event) => {
  const {target: { value },} = event;
  setTags(
    typeof value === 'string' ? value.split(',') : value,
  );
};

const addNewTag = (e) => {
  console.log(newTag)
}

const addNewPOst = (e) => {
    e.preventDefault()
    create({...post, tags})
    setPost({body: '', title: ''})
    setTags([])
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
            <MultipleSelectCheckmarks handleChange={handleChange} tags={tags}/>
            <MyButtons onClick={addNewPOst}>Добавить</MyButtons>
    </form>
    <form>
          <MyInput
                onChange={e => setNewTag(e => sete.target.value)} 
                value={post.body} 
                placeholder='Добавить текст'
                autoComplete="off"
            />
        <Button variant="text" onClick={addNewTag}>Добавить тег</Button>
    </form>
  </div>
  )
}
