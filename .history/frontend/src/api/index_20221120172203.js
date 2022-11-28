class Api {
    constructor (headers) {
      this.headers = headers
    }
  
    getPostList ({limit=10, page=1}) {
      const response = await axios.get('http://127.0.0.1:8000/api/posts/', {
              params: {
                  _limit: limit,
                  _page: page
              }})
      return response
}

export default new Api({ 'content-type': 'application/json' })