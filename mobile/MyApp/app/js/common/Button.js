/**
 * @author liangge
 */
'use strict';

import React, { Component } from 'react'
import {
  View,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native'
import _ from 'lodash'
const debounceMillisecond = 2000
export default class Button extends Component {
    debouncePress = onPress => () => {
         const clickTime = Date.now()
         if (!this.lastClickTime ||
            Math.abs(this.lastClickTime - clickTime) > debounceMillisecond) {
            this.lastClickTime = clickTime
            onPress()
         }
    }
    render(){
        return Platform.OS === 'ios'?(
          <TouchableOpacity {...this.props}  onPress={this.debouncePress(this.props.onPress)} activeOpacity={0.6}>{this.props.children}</TouchableOpacity>
        ):(
            <TouchableOpacity {...this.props}  onPress={this.debouncePress(this.props.onPress)} activeOpacity={0.6}>{this.props.children}</TouchableOpacity>
        )
    }
}
