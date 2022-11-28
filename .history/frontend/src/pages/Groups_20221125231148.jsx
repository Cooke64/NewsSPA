import React from 'react'

export default function Groups() {
    const [groups, setGroups] = React.useState([])

    React.useEffect(()=> {
        fetchPost(limit, page)
      }, [page])
  return (
    
    <div>Groups</div>
  )
}
