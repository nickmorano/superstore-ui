import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

export default {
  async login (userDetails) {
    const response = await axios.post('login', userDetails)
    return response.data
  },
  async regions () {
    const response = await axios.get('api/regions')
    return response.data
  }
}
