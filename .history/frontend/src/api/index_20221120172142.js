class Api {
    constructor (headers) {
      this.headers = headers
    }
  

}

export default new Api({ 'content-type': 'application/json' })