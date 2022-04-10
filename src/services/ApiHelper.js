import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

export default {
  async login (userDetails) {
    const response = await axios.post('login', userDetails)
    return response.data
  },
  async users () {
    const response = await axios.get('http://localhost:3000/users')
    return response.data
  },
  async products () {
    const response = await axios.get('http://localhost:3000/products')
    return response.data
  }
}
