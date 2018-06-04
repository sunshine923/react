/**
 * 接口地址配置项
 * @author liangge
 * @time 2017-10-16
 */
let BASE_PATH= 'http://ci.equotainsight.com/'//'http://app.equotainsight.com/' //'http://ci.equotainsight.com/' //'http://app.equotainsight.com/' //'http://ci.equotainsight.com/'
 // let BASE_PATH=  'http://10.203.42.139:8000/'//'http://testapp.equotaenergy.com/'//'http://192.168.0.109:8000/'// 'http://testapp.equotaenergy.com/'//'http://app.equotaenergy.ai/'
 let urlCng = {
 	'path':BASE_PATH,
    //任务页面
 	'alert':{
        //获取token
        login: BASE_PATH + 'login/',
        //任务列表
        alertLog: BASE_PATH + 'api/alert/alert_log/',
        //过滤条件
        alertFilter: BASE_PATH + 'api/filter_condition/',
        //alert详情页面
        alertDetail: BASE_PATH + 'api/alert/alert_log/id/',
        //alert 评论接口
        comments: BASE_PATH + 'api/alert/alert_log_comments/',
        //批量处理接口
        update: BASE_PATH + 'api/alert/mp_alert_batch_update/',
        //未读查看获取接口
        unRead: BASE_PATH + 'api/alert/mp_alert_count/id/',
 	}

 }
 global.urlCng = urlCng;