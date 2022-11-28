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
        res.json().then(data => func(data))
      })
    }

    getPostList (
      {limit=10,
      page=1
    } = {}) {
      return fetch(
        `http://127.0.0.1:8000/api/posts/?page=${page}&limit=${limit}`,
        {
          method: 'GET',
          headers: {
            ...this.headers,
          }
        }
      )
      .then(this.checkResponse)
    }

    signup ({ email, password, username}) {
      return fetch(
        `/api/users/`,
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

export default new Api({ 'content-type': 'application/json' })