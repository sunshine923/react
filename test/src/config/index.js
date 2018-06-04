/**
 *
 * highcharts 参数设置
 */
import Highcharts from 'highcharts'
Highcharts.setOptions({
  /*  chart:{
        margin:[0,0,0,0],
        padding:[-30,0,0,0]
    },*/
    global: {
        /**
         * Use moment-timezone.js to return the timezone offset for individual
         * timestamps, used in the X axis labels and the tooltip header.
         */
        useUTC: true,
        getTimezoneOffset: function(timestamp) {
            return -480; // +8 time zone
        }
    },
    lang: {
        contextButtonTitle: "图表导出菜单",
        decimalPoint: ".",
        downloadJPEG: "下载JPEG图片",
        downloadPDF: "下载PDF文件",
        downloadPNG: "下载PNG文件",
        downloadSVG: "下载SVG文件",
        drillUpText: "返回 {series.name}",
        loading: "加载中",
        months: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        noData: "没有数据",
        numericSymbols: ["千", "兆", "G", "T", "P", "E"],
        printChart: "打印图表",
        resetZoom: "恢复缩放",
        resetZoomTitle: "恢复图表",
        shortMonths: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        thousandsSep: ",",
        weekdays: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
    },
    chart: {
        backgroundColor: 'rgba(0,0,0,0)'
    },
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    legend: {
        itemStyle: {
            color: "#fff",
            fontSize: "18px",
            fontWeight: 'normal',
        },
    },
    tooltip:{
        backgroundColor:'#EFEFEF',
        borderRadius:4,
        style:{
            "fontFamily":"'PingFang SC','微软雅黑','Avenir'"
        }
    },
    xAxis: {
        gridLineWidth: "0.5px",
        labels:{
            style:{
                "color":"#fff",
                "fontSize":"18px",
                "fontWeight":"normal",
                "fontFamily":"'PingFang SC','微软雅黑','Avenir'"
            }
        },
        gridLineColor: 'rgba(255,255,255,0.5)',
        tickLength: 0,
        lineWidth: 1,
        lineColor: '#00AAD5',
        title: {
            style: {
                fontSize: '18px',
                color: "#fff",
                fontWeight:"normal",
                fontFamily:"'PingFang SC','微软雅黑','Avenir'"
            }
        },
    },
    yAxis: {
        labels:{
            style:{
                "color":"#fff",
                "fontSize":"18px",
                "fontWeight":"normal",
                "fontFamily":"'PingFang SC','微软雅黑','Avenir'"
            }
        },
        gridLineWidth: "0.5px",
        gridLineColor: 'rgba(255,255,255,0.5)',
        lineColor: '#00AAD5',
        lineWidth: 1,
        tickLength: 0,
        title: {
            style: {
                fontSize: '18px',
                color: "#fff",
                fontWeight:"normal",
                fontFamily:"'PingFang SC','微软雅黑','Avenir'"
            }
        },
    },
})