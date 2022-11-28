class Api {
    constructor (url, headers) {
      this.url = url
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

    signin ({ email, password }) {
        return fetch(
          'http://127.0.0.1:8000/api/login',
          {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
              email, password
            })
          }
        ).then(this.checkResponse)
      }
}