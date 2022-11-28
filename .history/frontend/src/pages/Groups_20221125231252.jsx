import api from 'api'
import React from 'react'

export default function Groups() {
    const [groups, setGroups] = React.useState([])

    const fetchGroup = () => {
        api.getGroups().then(result => console.log(result))
    }

    React.useEffect(()=> {
        fetchGroup()
      }, [groups])
  return (
    
    <div>Groups</div>
  )
}
