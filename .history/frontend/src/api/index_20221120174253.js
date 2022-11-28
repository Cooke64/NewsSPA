class Api {
    constructor (headers) {
      this.headers = headers
    }
  
    checkResponse (res) {
      console.log(res)
      return new Promise((resolve, reject) => {
        if (res.status === 204) {
          return resolve(res)
        }
      })
    }

    getPostList (
      {limit=10, page=1}
    ) {
      return fetch(
        `https://jsonplaceholder.typicode.com/posts/?page=${page}&limit=${limit}`,
        // `http://127.0.0.1:8000/api/posts/?page=${page}&limit=${limit}`,
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