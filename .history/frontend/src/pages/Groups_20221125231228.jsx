import api from 'api'
import React from 'react'

export default function Groups() {
    const [groups, setGroups] = React.useState([])

    const fetchGroup = () => {
        api.getGroups().then(result => cons)
    }

    React.useEffect(()=> {
        fetchPost(limit, page)
      }, [page])
  return (
    
    <div>Groups</div>
  )
}
