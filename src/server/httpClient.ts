// import { onMounted } from 'vue'
import axios from 'axios'

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    // 'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  },
})

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Axios Error:', error.response)
    return Promise.reject(error)
  },
)

// onMounted(async () => {
//   try {
//     const res = await httpClient.get('/products')
//     console.log(res)
//     res.data.slice(3, 0)
//   } catch (e) {
//     console.error('Error fetching products:', e)
//   }
// })
