import React from 'react'

export default function AuthorList() {
  const {username} = React.useParams();
  return (
    <div>Youre looking to author {username}</div>
  )
}
