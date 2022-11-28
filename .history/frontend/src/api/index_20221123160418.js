class Api {
    constructor (headers) {
      this.headers = headers
    }


    checkResponse (res) {
      return new Promise((resolve, reject) => {
        if (res.status === 204) {
          return resolve(res)
        }
        const func = res.status < 400 ? resolve : reject
        res.json().then(data => {
          func(data)})
      })
    }

    getPostList ({limit=10,page=1} = {}) {
      return fetch(
        `http://127.0.0.1:8000/api/posts/?page=${page}&limit=${limit}`,
        {
          method: 'GET',
          headers: {
            ...this.headers,
          },
        }
      )
      .then(this.checkResponse)
    }

    getCurrentPost (id)
    {
      return fetch(
      `http://127.0.0.1:8000/api/posts/` + id,
      {
        method: 'GET',
        headers: {
          ...this.headers,
        },
      }
    )
    .then(this.checkResponse)}

    removePost (id) {
      const token = localStorage.getItem('token')
      return fetch(
        `http://127.0.0.1:8000/api/posts/` + id,
        {
          method: 'DELETE',
          headers: {
            ...this.headers,
            'Authorization': `Bearer ${token}`
          },
        }
      ).then(this.checkResponse)
    }

    createPost ({title, body}) {
      const token = localStorage.getItem('token')
      return fetch(
        `http://127.0.0.1:8000/api/posts/`,
        {
          method: 'POST',
          headers: {
            ...this.headers,
            'Authorization': `Bearer ${token}`
          },

          body: JSON.stringify({title, body})
        }
      ).then(this.checkResponse)
    }

    updatePost ({title, body, id}) {
      return fetch(
        `http://127.0.0.1:8000/api/posts/${id}/`,
        {
          method: 'put',
          headers: this.headers,
          body: JSON.stringify({title, body})
        }
      ).then(this.checkResponse)
    }

    removeComment ({ commentId, id }) {
      const token = localStorage.getItem('token')
      return fetch(
        `http://127.0.0.1:8000/api/posts/${id}/comments/` + commentId,
        {
          method: 'DELETE',
          headers: {
            ...this.headers,
            'Authorization': `Bearer ${token}`
          },
        }
      ).then(this.checkResponse)
    }

    createComment ({post, text}) {
      const token = localStorage.getItem('token')
      return fetch(
        `http://127.0.0.1:8000/api/posts/${post}/comments/`,
        {
          method: 'POST',
          headers: {
            ...this.headers,
            'Authorization': `Bearer ${token}`
          },

          body: JSON.stringify({post, text})
        }
      ).then(this.checkResponse)
    }
    
    // user CRUD

    loginUser ({email, password}) {
      return fetch(
        `http://127.0.0.1:8000/api/auth/jwt/create/`,
        {
          method: 'post',
          headers: this.headers,
          body: JSON.stringify({email, password})
        }
      ).then(this.checkResponse)
    }

    registrnUser ({email, username, password}) {
      return fetch(
        `http://127.0.0.1:8000/api/auth/users/`,
        {
          method: 'post',
          headers: this.headers,
          body: JSON.stringify({email,username, password})
        }
      ).then(this.checkResponse)
    }

    signup ({ email, password, username}) {
      return fetch(
        `/auth/users/`,
        {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({
            email, password, username,
          })
        }
      ).then(this.checkResponse)
    }


}

export default new Api({ 
  'content-type': 'application/json'})