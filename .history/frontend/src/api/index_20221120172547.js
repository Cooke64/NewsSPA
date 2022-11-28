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

    getRecipe ({
      {limit=10, page=1}
    }) {
      return fetch(
        `http://127.0.0.1:8000/api/posts/?page=${page}&limit=${limit`,
        {
          method: 'GET',
          headers: {
            ...this._headers,
          }
        }
      ).then(this.checkResponse)
    }
}

export default new Api({ 'content-type': 'application/json' })