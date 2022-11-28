class Api {
    constructor (headers) {
      this.headers = headers
    }


    checkResponse (res) {
      return new Promise((resolve, reject) => {
        const func = res.status < 400 ? resolve : reject
        res.json().then(data => {
          func(data)})
      })
    }

    // post CRUD

    getPostList ({postAuthor, limit=10,page=1,} = {}) {
      const author = (postAuthor ?`?author=${postAuthor}` : '')
      return fetch(
        `http://127.0.0.1:8000/api/posts/` + author,
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
      const token = localStorage.getItem('token')
      let headers = this.headers
      if (token) {
        Object.assign(headers, {'Authorization': `Bearer ${token}`})
      }
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
        `/posts/`,
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

    // comment CRUD

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

    getUser () {
      const token = localStorage.getItem('token')
      return fetch(
        `http://127.0.0.1:8000/api/auth/users/me/`,
        {
          method: 'get',
          headers: {...this._headers, 'Authorization': `Bearer ${token}`}
          ,
        }
      ).then(this.checkResponse)
    }

    // tags CRUD

    getTags () {
      return fetch(
        `http://127.0.0.1:8000/api/tags/`,
        {
          method: 'GET',
          headers: {
            ...this._headers
          }
        }
      ).then(this.checkResponse)
    }

    getGroups () {
      return fetch(
        `http://127.0.0.1:8000/api/groups/`,
        {
          method: 'GET',
          headers: {
            ...this._headers
          }
        }
      ).then(this.checkResponse)
    }

    // Favorite CRUD

    addInFavorite (id) {
      const token = localStorage.getItem('token')
      return fetch(
        `http://127.0.0.1:8000/api/posts/${id}/favorite/`,
        {
          method: 'POST',
          headers: {...this._headers, 'Authorization': `Bearer ${token}`},
          body: JSON.stringify({
            post:id, 
          })
          ,
        }
      ).then(this.checkResponse)
    }

    removeFavorite (id) {
      const token = localStorage.getItem('token')
      return fetch(
        `http://127.0.0.1:8000/api/posts/${id}/favorite/`,
        {
          method: 'DELETE',
          headers: {...this._headers, 'Authorization': `Bearer ${token}`},
          body: JSON.stringify({
            post:id, 
          })
          ,
        }
      ).then(this.checkResponse)
    } 
    // Rating CRUD
    
    addRatingToPost ({id, rating}) {
      const token = localStorage.getItem('token')
      return fetch(
        `http://127.0.0.1:8000/api/posts/${id}/rating/`,
        {
          method: 'POST',
          headers: {...this._headers, 'Authorization': `Bearer ${token}`, },
          body: JSON.stringify({
            star_rating: rating,
          })
          ,
        }
      ).then(this.checkResponse)
    }

    removeRatingToPost (id) {
      const token = localStorage.getItem('token')
      return fetch(
        `http://127.0.0.1:8000/api/posts/${id}/rating/`,
        {
          method: 'DELETE',
          headers: {...this._headers, 'Authorization': `Bearer ${token}`},
        }
      ).then(this.checkResponse)
    }
}

export default new Api({ 
  'content-type': 'application/json'})