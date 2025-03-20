import axios from 'axios'
export default axios.create({
  baseURL: 'https://test-api-buildwithus.ai-softdev.com/api/v1/',
  // baseURL: 'https://api-buildwithus.ai-softdev.com/',
  // baseURL: 'https://f01d-94-158-60-209.ngrok-free.app/api/v1',
  // headers: {'ngrok-skip-browser-warning': 'dsfsf'}
  // baseURL: 'http://192.168.100.5:8000/',
  // baseURL: 'http://127.0.0.1:8000/'
})

