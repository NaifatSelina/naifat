import axios from "axios";

axios.defaults.baseURL = 'https://drf-api-app-65d9b6a619df.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true