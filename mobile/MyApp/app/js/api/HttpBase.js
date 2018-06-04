/**
 * Created by liangge on 17/9/20.
 */
var HTTPBase = {};

/**
 *
 * GET请求
 *
 * @param url
 * @param params {}包装
 * @param headers
 *
 * @return {Promise}
 *
 * */
HTTPBase.get = function(url, params) {
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    //加token
   /* if (global.token) {
        headers.Authorization = 'Bearer ' + global.token;
    }*/
    if (params) {

        let paramsArray = [];

        // 获取 params 内所有的 key
        let paramsKeyArray = Object.keys(params);
        // 通过 forEach 方法拿到数组中每个元素,将元素与参数的值进行拼接处理,并且放入 paramsArray 中
        paramsKeyArray.forEach(key => paramsArray.push(key + '=' + params[key]));

        // 网址拼接
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&');
        } else {
            url += paramsArray.join('&');
        }
    }
    return new Promise(function(resolve, reject) {
        fetch(url, {
                method: 'GET',
                headers: headers,
                credentials: "include"
            })
            .then((response) => response.json())
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject({
                    status: -1
                })
            })
            .done();
    })
};


/**
 *
 * POST请求
 *
 * @param url
 * @param params {}包装
 * @param headers
 *
 * @return {Promise}
 *
 * */

HTTPBase.post = function(url, params) {
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };
    return new Promise(function(resolve, reject) {
        fetch(url, {
                method: 'POST',
                headers:headers,
                credentials: "include",
                body: JSON.stringify(params),
            })
            .then((response) => response.json())
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject({
                    status: -1
                })
            })
            .done();
    })
};
/**
 *
 * PUT请求
 *
 * @param url
 * @param params {}包装
 * @param headers
 *
 * @return {Promise}
 *
 * */

HTTPBase.put = function(url, params) {
    let headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    });
    return new Promise(function(resolve, reject) {
        fetch(url, {
                method: 'PUT',
                headers:headers,
                credentials: "include",
                body: JSON.stringify(params),
            })
            .then((response) => response.json())
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject({
                    status: -1
                })
            })
            .done();
    })
};
//带取消请求的
HTTPBase.makeCancelable = (promise) => {
    let hasCanceled_ = false;

    const wrappedPromise = new Promise((resolve, reject) => {
        promise.then(
            val => hasCanceled_ ? reject({
                isCanceled: true
            }) : resolve(val),
            error => hasCanceled_ ? reject({
                isCanceled: true
            }) : reject(error)
        );
    });

    return {
        promise: wrappedPromise,
        cancel() {
            hasCanceled_ = true;
        },
    };
};
global.HTTPBase = HTTPBase;