import axios from 'axios'

const API = axios.create({
    baseURL:'https://tranquil-basin-61642.herokuapp.com/v1'
})

export default API