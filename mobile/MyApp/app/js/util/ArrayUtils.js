//数组操作

export default class ArrayUtils {
    /**
     * 更新数组,若item已存在则将其从数组中删除,若不存在则将其添加到数组
     * **/
    static updateArray(array,item){
        for (var i = 0, len = array.length; i < len; i++) {
            var temp = array[i];
            if (item=== temp) {
                array.splice(i, 1);
                return;
            }
        }
        array.push(item);
    }
    /**
     * 判断两个数组的是否相等
     * @return boolean true 数组长度相等且对应元素相等
     * */
    static isEqual(arr1,arr2){
        if(!(arr1&&arr2))return false;
        if(arr1.length!=arr2.length)return false;
        for(let i=0,l=arr1.length;i<l;i++){
            if (arr1[i]!=arr2[i])return false;
        }
        return true;
    }
    /**
     * clone 数组
     * @return Array 新的数组
     * */
    static clone(from){
        if(!from)return [];
        let newArray=[];
        for(let i=0,l=from.length;i<l;i++){
            newArray[i]=from[i];
        }
        return newArray;
    }
    /**
     * 将数组根据指定的值进行过滤
     * **/
    static remove(array,result){
        if (!array) return;
        let l = array.length
        for (var i = 0; i < l; i++) {
            for (var j = 0, len = result.length; j < len; j++) {
                if (array[i] && array[i].id === result[j].id) {
                    array.splice(i--, 1);
                }    
            }
        }
        return array
    }
    /**
     *日期界面创建日期数组
    **/
    static createDateData() {
        let date = [];
        for(let i=2000;i<2050;i++){
            let month = [];
            for(let j = 1;j<13;j++){
                let day = [];
                if(j === 2){
                    for(let k=1;k<29;k++){
                        day.push(k+'日');
                    }
                    //Leap day for years that are divisible by 4, such as 2000, 2004
                    if(i%4 === 0){
                        day.push(29+'日');
                    }
                }
                else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
                    for(let k=1;k<32;k++){
                        day.push(k+'日');
                    }
                }
                else{
                    for(let k=1;k<31;k++){
                        day.push(k+'日');
                    }
                }
                let _month = {};
                _month[j+'月'] = day;
                month.push(_month);
            }
            let _date = {};
            _date[i+'年'] = month;
            date.push(_date);
        }
        return date;
    }
    //将选择的日期转换为日期格式
    static transformDate(pickedValue) {
        let date=''
        for(let i=0,len=pickedValue.length;i<len;i++) {
            let value= parseInt(pickedValue[i])
            if(value<10) {
                value= '0'+value
            }
            i!==pickedValue.length-1 ? date+=value+'-':date+=value
        }
        return date
    }
    //根据url 匹配对应的alert的字典项进行返回
    static march(array, url) {
        let item = {},
            id = url !== null && typeof url !== 'object' ? parseInt(url.replace(/[^0-9]+/g, '')) : url
        for (let i = 0, l = array.length; i < l; i++) {
            if (array[i].id === id) {
                item = array[i]
            }
        }
        return item
    }
     /**
     * 找到数组中指定元素，并替换其字段返回
     * arr 数组
     * v 指定的元素
     * key 字段名称
     * **/
    static find(arr , v , key) {
        let flag = false,
            returnValue = {}
        for (let i = 0, len = arr.length; i < len; i++) {
            if (v.id === arr[i].id) {
                flag = true
                returnValue = arr[i][key]
            }
        }
        if (flag) return returnValue
        else return v[key]
    }
    /**
     * 查询
     * arr 数组
     * v 指定的元素
     * **/
    static search(arr,v) {
        let rst = [];
         //将所有的数据遍历
         for (let i = 0; i < arr.length; i++) {
             let item = arr[i];
             if (item.name.indexOf(v) >= 0) {
                 rst.push(item);
             }
         }
         return rst;
    }
    //手机号码校验
    static isPoneAvailable(pone) {
        let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(pone)) {
            return false;
        } else {
            return true;
        }
    }
    static isEmailAvilable(email) {
        let reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
        　　
        if (email === "") { //输入不能为空         　　　　
            return false;　　
        } else if (!reg.test(email)) { //正则验证不通过，格式不对        　　　　
            return false;　　
        } else {　　　　
            return true;　　
        }
    }
}