import React,{Component} from 'react'
import {
  DeviceEventEmitter
} from 'react-native';
import Storage from '../api/Storage.js'
import hoistNonReactStatics from 'hoist-non-react-statics';
// 函数接受一个组件参数……
export default function BaseCompent(WrappedComponent) {
    // ……返回另一个新组件……
    class HOC extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                id: global.id, //初始化
                name:global.name,
                isLoading:true,
            };
        }
        componentDidMount() {    
            // 注册监听事件
            this.listener = DeviceEventEmitter.addListener('changeBuilding',
            (params) => this._handleChange(params));
        }

        componentWillUnmount() {
            //移除监听事件
            this.listener && this.listener.remove()
        }
        onLoading = (isLoading,reslove) => {
            this.setState({
                isLoading: isLoading,
            })
            reslove && reslove()
        }
        _handleChange = (params) => {
            this.setState({
                id: params.id,
                name:params.name
            });
            global.id = params.id
        }

        render() {
            // 注意此处将已有的props属性传递给原组件
            return <WrappedComponent {...this.state} { ...this.props} onLoading={this.onLoading} />;
        }
    };
     //为了让返回的组件有原始组件的静态方法，就要在函数内部将原始组件的静态方法复制给新的组件
    hoistNonReactStatics(HOC, WrappedComponent);

    return HOC
}