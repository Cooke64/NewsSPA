import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'


export default function AuthorList() {
  const {username} = useParams();
  return (
    <div>Youre looking to author {username} </div>
  )
}
