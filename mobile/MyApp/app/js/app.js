/**
 * author geliang
 */

import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';
import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import Http from './api/HttpBase';
import urlConfig from '../res/config/url/urlConfig.js';
import msgConfig from '../res/config/language/chinConfig.js';
import '../res/config/chart/highcharts'
import HomePage from './page/HomePage';
import TotalInfo from './page/TotalInfo'
import Task from './page/Task';
import Login from './page/login/Login';
import Mine from './page/Mine';
import Order from './page/mine/Order';
import About from './page/mine/About';
import Help from './page/mine/Help';
import Message from './page/mine/Message';
import TaskDetail from './page/task/detail/TaskDetail'
import Filter from './page/task/Filter'
import SelectCity from './page/homepage/search/SelectCity';
import SelectBuilding from './page/homepage/search/SelectBuilding';
import Search from "./page/homepage/search/Search";
import Notify from "./Notify";
//iPhone X
const ISIPHONEX = Dimensions.get('window').width==375 && Dimensions.get('window').height == 812
const optHome={
    tabBarTitle:global.msg.index,
    normalImage:require('../res/image/size/home.png'),
    selectedImage:require('../res/image/size/homeSelect.png'),
    size:{height:18,width:18},
    flagNumber:false,
    tab:'HomePage'
}
const optTask={
    tabBarTitle:global.msg.task,
    normalImage:require('../res/image/size/task.png'),
    selectedImage:require('../res/image/size/taskSelect.png'),
    navTitle:global.msg.taskList,
    size:{height:15,width:20 },
    flagNumber:true,
    tab:'Task'
}
const optTotal={
    tabBarTitle:global.msg.totalInf,
    normalImage:require('../res/image/size/total.png'),
    selectedImage:require('../res/image/size/totalSelect.png'),
    navTitle:global.msg.totalInf,
    size:{height:18,width:18},
    flagNumber:false,
    tab:'Total'
}
const optMy={
    tabBarTitle:global.msg.my,
    normalImage:require('../res/image/size/my.png'),
    selectedImage:require('../res/image/size/mySelect.png'),
    navTitle:global.msg.my,
    size:{height:17,width:12 },
    flagNumber:false,
    tab:'My'
}
//封装的tab
const TabOptions = (opt) => {
    const number=opt.flagNumber? <Notify /> :null;//提示消息数量
    const tabBarLabel = opt.tabBarTitle;
    const tabBarIcon = (({tintColor,focused})=> { //选中与未选中时图片
        return(
            <View >
                <Image style={{marginHorizontal:10}}
                source={!focused ? opt.normalImage :opt. selectedImage}
                />  
                {number}
            </View>
        )
    });
   /* const headerTitle = opt.navTitle;*/
    const headerTitleStyle = {fontSize:18,color:'#fff',alignSelf:'center'};
    // header的style
    const headerStyle = {
        backgroundColor: '#11AF8E',
        /*paddingTop: ISIPHONEX ? 44 : 20,*/
       /* height:ISIPHONEX ? 88 : 64,*/
    };
    const tabBarVisible = true;
    // const header = null;
    return {
        tabBarLabel,
        tabBarIcon,
      /*  headerTitle,*/
        headerTitleStyle,
        headerStyle,
        tabBarVisible,
        /*tabBarOnPress: (({
          route,
          index
        }, jumpToIndex) => {
            Storage.delete('selectFilter')  // 清除查询缓存 重置筛选条件
            // 只有调用jumpToIndex方法之后才会真正的跳转页面。
            jumpToIndex(index);
        }),*/
    };
};

const MyTab = TabNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions:({navigation,screenProps}) => TabOptions(optHome)
    },
    Task: {
        screen:Task,
        navigationOptions:({navigation,screenProps}) => TabOptions(optTask)
    },
    Total: {
        screen:TotalInfo,
        navigationOptions:({navigation,screenProps}) => TabOptions(optTotal)
    },
    My: {
        screen:Mine,
        navigationOptions:({navigation,screenProps}) => TabOptions(optMy)
    }
},{
    tabBarPosition:'bottom', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom')
    swipeEnabled:false, // 是否允许在标签之间进行滑动。
    animationEnabled: false, // 是否在更改标签时显示动画。
    lazy:true, // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦。
    initialRouteName:'HomePage', // 设置默认的页面组件
    backBehavior:'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions:{
        // iOS属性
        // 因为第二个tabbar是在页面中创建的，所以前景色的设置对其无效，当然也可以通过设置tintColor使其生效
        activeTintColor:'#11AF8E', // label和icon的前景色 活跃状态下（选中）。
        inactiveTintColor:'#9B9B9B', // label和icon的前景色 不活跃状态下(未选中)。

        //activeBackgroundColor:'#eee', //label和icon的背景色 活跃状态下（选中） 。
        //inactiveBackgroundColor:'#eee', // label和icon的背景色 不活跃状态下（未选中）。

        showLabel:true, // 是否显示label，默认开启。
        style: {
              backgroundColor:'#F9F9F9', // TabBar 背景色
              height:Platform.OS==='ios'?49:56,
              borderWidth:0,
              paddingBottom:Platform.OS==='ios'?7:0,
        }, // tabbar的样式。
        // labelStyle:{}, //label的样式。

        // 安卓属性

        // activeTintColor:'', // label和icon的前景色 活跃状态下（选中） 。
        // inactiveTintColor:'', // label和icon的前景色 不活跃状态下(未选中)。
        showIcon:true, // 是否显示图标，默认关闭。
        // showLabel:true, //是否显示label，默认开启。
        // style:{}, // tabbar的样式。
        // labelStyle:{}, // label的样式。
        upperCaseLabel:false, // 是否使标签大写，默认为true。
        pressColor:'#9B9B9B', // material涟漪效果的颜色（安卓版本需要大于5.0）。
        // pressOpacity:'', // 按压标签的透明度变化（安卓版本需要小于5.0）。
        // scrollEnabled:false, // 是否启用可滚动选项卡。
        // tabStyle:{}, // tab的样式。
         indicatorStyle:{
            height:0
         }, // 标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题。
         labelStyle:{
            fontSize:12,
            bottom:Platform.OS==='ios'?-7:0,
           /* bottom:ISIPHONEX?20:0*/
         }, // label的样式。
         iconStyle:{// 图标的样式。
            width: 20,
            height:18,
             bottom:Platform.OS==='ios'?0:-5,
         },
    }

});
//其他页面的导航综合设置
const otherHeader = (navigation,title) => {
    return {
        headerStyle: {
            backgroundColor: '#11AF8E',
            // paddingTop: ISIPHONEX ? 50 : 20,
            // height: ISIPHONEX ? 88 : 64
        },
        headerTitle:title,
        headerTitleStyle:{fontSize:18,color:'#fff',alignSelf:'center'},
        headerLeft:(
            <TouchableOpacity  onPress={() => navigation.goBack()} style={{ width:40,height:40,justifyContent:'center',alignItems:'center'}} >
                <Image
                    style={{width:18,height:22}}
                    source={require('../res/image/size/go.png')} />
            </TouchableOpacity>
         )       
     }
}
// 初始化StackNavigator
const MyNav = StackNavigator({
    // 将TabNavigator包裹在StackNavigator里面可以保证跳转页面的时候隐藏tabbar
    // Login:{
    //     screen:Login,
    //     navigationOptions:({navigation,screenProps}) =>({
    //         header:null
    //     })
    // },
    MyTab:{
        screen:MyTab,
    },
    // 将需要跳转的页面注册在这里，全局才可以跳转
    About:{
        screen:About,
        navigationOptions:({navigation,screenProps}) =>otherHeader(navigation,'关于亿可') 
    },
    Help:{
        screen:Help,
        navigationOptions:({navigation,screenProps}) =>otherHeader(navigation,'帮助中心') 
    },
    Order:{
        screen:Order,
        navigationOptions:({navigation,screenProps}) =>otherHeader(navigation,'用户反馈') 
    },
    Message:{
        screen:Message,
        navigationOptions:({navigation,screenProps}) =>otherHeader(navigation,'基本信息') 
    },
    Login:{
         screen:Login,
         navigationOptions:({navigation,screenProps}) =>({
             header:null
         })
     },
     SelectCity:{
        screen:SelectCity,
        navigationOptions:({navigation,screenProps}) =>({
            header:null
        })
     },
     SelectBuilding:{
        screen:SelectBuilding,
        navigationOptions:({navigation,screenProps}) =>({
            header:null
        })
     },
     Search:{
        screen:Search,
        navigationOptions:({navigation,screenProps}) =>({
          header:null
          })
     },
     //任务详情页
     TaskDetail:{
         screen:TaskDetail,
         navigationOptions:({navigation,screenProps}) =>otherHeader(navigation,'任务详情') 
     },
     //任务过滤页 由任务页面跳转到筛选
     TaskFilter:{
         screen:Filter,
         navigationOptions:({navigation,screenProps}) => otherHeader(navigation,'任务筛选') 
     },
},{
    initialRouteName:'Login', // 设置默认的页面组件
});

export default MyNav;