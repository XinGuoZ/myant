import axios from 'axios'
import apiInterface from "./interface"
const service = new axios.create({
    timeout: 3000
})

service.interceptors.request.use(
    config=>{
        return config
    },
    error => {
        console.log(error)
    }
)
service.interceptors.response.use(
    response=>{
        let res = {}
        res.status = response.status
        res.data = response.data
        return res
    },
    err => console.log(err)
)
export default {
    service
}