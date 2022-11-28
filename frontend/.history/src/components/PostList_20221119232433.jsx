import React from 'react'
import PostItem from './PostItem'


export default function PostList({posts, remove}) {
  return (
    posts.map(item => (
          <PostItem 
          item={item} 
          remove={remove} 
          key={item.id}/>
        ))
    
  )
}
