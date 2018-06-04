const conf = {
    /*  chart:{
          margin:[0,0,0,0],
          padding:[-30,0,0,0]
      },*/
    global: {
        /**
         * Use moment-timezone.js to return the timezone offset for individual
         * timestamps, used in the X axis labels and the tooltip header.
         */
        useUTC: false,
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
    xAxis: {
        gridLineWidth: "0.5px",
        labels:{
            style:{
                "color":"#000",
                "fontSize":"10px",
                "fontWeight":"0",
                "fontFamily":"微软雅黑"
            }
        },
        gridLineColor: '#D0D0D0',
        tickLength: 0,
        lineColor:'#eee',
        title: {
            style: {
                fontSize: '10px',
                color: "#000"
            }
        },
    },
    yAxis: {
        labels:{
            style:{
                "color":"#000",
                "fontSize":"10px",
                "fontWeight":"0",
                "fontFamily":"微软雅黑"
            }
        },
        gridLineWidth: "0.5px",
        gridLineColor: '#D0D0D0',
        title: {
            style: {
                fontSize: '10px',
                color: "#000"
            }
        },
        lineColor:'#eee',
        allowDecimals:false,
    },
}
export default conf