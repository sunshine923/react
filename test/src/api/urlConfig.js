/**
 * 接口地址配置项
 * @author liangge
 * @time 2018-3-18
 */
let BASE_PATH = window.location.host + "/"; //"http://120.132.7.35/"
if (!BASE_PATH.indexOf('localhost')) {
    BASE_PATH = "http://ci.equotainsight.com/"
} else {
    BASE_PATH = '/'
}
// let  BASE_PATH = 'http://120.132.7.35/'
let urlCng = {
    //账号设置
    userSet:BASE_PATH+'api/user_set/id/',
}
export {
    urlCng
}