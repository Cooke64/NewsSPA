import axios from "axios"

class Api {
    constructor (headers) {
      this.headers = headers
    }
  
    getPostList ({limit=10, page=1}) {
      const response =  axios.get('http://127.0.0.1:8000/api/posts/', {
              params: {
                  _limit: limit,
                  _page: page
              }})
      return response
    }

    getPosts ({limit=10, page=1}) {
      return fetch(
        `/api/users/`,
        {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({
            email, password, username, first_name, last_name
          })
        }
      ).then(this.checkResponse)
    }
}

export default new Api({ 'content-type': 'application/json' })