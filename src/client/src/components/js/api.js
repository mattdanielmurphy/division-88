import axios from 'axios'
import env from 'client-env'

export default axios.create({
  baseURL: env.apiUrl,
})
