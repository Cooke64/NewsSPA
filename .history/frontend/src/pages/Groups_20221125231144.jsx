import React from 'react'

export default function Groups() {
    const [groups, setGroups] = React.useState([])

    useEffect(()=> {
        fetchPost(limit, page)
      }, [page])
  return (
    
    <div>Groups</div>
  )
}
