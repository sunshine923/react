'use strict'
import {AsyncStorage} from 'react-native';
/**
 * storage的包装类
 */
export default class Storage {
    /**
     *存取json数据
     * @param key
     */
    static async get(key) {
        try {

            let value = await AsyncStorage.getItem(key);

            if (value) {
                return JSON.parse(value);
            } else {
                return JSON.parse('{}');
            }

        } catch (e) {
            return JSON.parse('{}');
        }

    }

    /**
     *存入json数据
     * @param key
     * @param jsonData
     */

    static async set(key,jsonData) {
        try {
           await AsyncStorage.setItem(key, JSON.stringify(jsonData));
        } catch (e) {
            console.error(e);
        }
    }
    /**
     * 更新
     * @param key
     * @param value
     * @returns {Promise<T>|Promise.<TResult>}
     */
    static update(key, value) {
        return Storage.get(key).then((item) => {
            value = typeof value === 'string' ? value : Object.assign({}, item, value);
            return AsyncStorage.setItem(key, JSON.stringify(value));
        });
    }


    /**
     * 更新
     * @param key
     * @returns {*}
     */
    static delete(key) {
        return AsyncStorage.removeItem(key);
    }
}