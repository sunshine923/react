/*高阶组件*/
import React,{Component} from 'react'
import {getStore} from 'Api/utils'
import eventObject from '../../config/eventSignal.js'
// 函数接受一个组件参数……
export default function Subscription(WrappedComponent) {
    // ……返回另一个新组件……
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                id: JSON.parse(getStore('buildings'))[0].id
            };
        }

        componentDidMount() {
            // 注册订阅事件
            eventObject.changeBuilding.add(this.handleChange); 
        }

        componentWillUnmount() {
            //移除监听事件
            eventObject.changeBuilding.remove(this.handleChange);
        }

        handleChange = (params) => {
            this.setState({
                id: JSON.parse(params)
            });
        }

        render() {
            // 注意此处将已有的props属性传递给原组件
            return <WrappedComponent id = {this.state.id} { ...this.props} />;
        }
    };
}