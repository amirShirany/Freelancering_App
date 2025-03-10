import axios from "axios"

const BASE_URL = "http://localhost:5000/api"

const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, //? http-only cookie => send to backend
})

//request
//response => error

app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
)

// error => response => staust code === 401 => process
// add project , get user ,... => got 401 error
app.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config
    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true
      try {
        const { data } = await axios.get(`${BASE_URL}/user/refresh-token`, {
          withCredentials: true,
        })
        if (data) return app(originalConfig)
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
)

const http = {
  get: app.get,
  post: app.post,
  put: app.put,
  delete: app.delete,
  patch: app.patch,
}

export default http
