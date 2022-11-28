import api from 'api'
import React from 'react'

export default function Groups() {
    const [groups, setGroups] = React.useState([])

    const fetchGroup = () => {
        api.getGroups()
        .then(
            (result) => {
            setGroups(...groups, result)
            console.log(result)
        })
    }

    React.useEffect(()=> {
        fetchGroup()
      }, [])

  return (
    
    <div>
        {
            groups.map(group =>
              <span>
                  {group.name}
              </span>
              )}
    </div>
  )
}
