import axios from 'axios'
import { urlCng } from './urlConfig'
import {setStore} from 'Api/utils'
axios.defaults.withCredentials = true

//意见反馈
export function feedback(params) {
    return axios.post(urlCng.feedback,params,{headers:{'Content-Type':'multipart/form-data'}}).then((res) => {
        return Promise.resolve(res.data)
    })
}
//账号获取
export function user(params) {
    return axios.get(urlCng.user.replace('id',params.id),params).then((res) => {
        return Promise.resolve(res.data)
    })
}
//账号设置
export function userSet(params) {
    return axios.put(urlCng.userSet.replace('id',params.id),params).then((res) => {
        return Promise.resolve(res.data)
    })
}
