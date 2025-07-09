import axios from 'axios'

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Axios Error:', error.response)
    return Promise.reject(error)
  },
)

export const allProducts = async () => {
  try {
    const response = await httpClient.get('/allProducts')
    return response.data
  } catch (e) {
    console.log('Error Fetching Data', e)
    throw e
  }
}
