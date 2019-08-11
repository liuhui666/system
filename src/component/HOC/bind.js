/**
 * 给表单增加 双向绑定功能  与context的model结合使用
 * bind="name"  //value 绑定 model.name
 * */

 import React, { Component } from 'react';
 import PropTypes from 'prop-types';
 import hoistNonReactStatic from 'hoist-non-react-statics';
 import { observer } from 'mobx-react';
 import { isObservable, isObservableMap } from 'mobx';

 export default (WrappedComponent) => {
   @observer
   class Bind extends Component {
     static displayName ='Bind';

     static propTypes={
       bind: PropTypes.string,
       onChange: PropTypes.func,
     }

     static defaultProps ={
       onChange: () => {},
     }

     static contextTypes = {
       model: PropTypes.object,
     }

//      constructor(props, context) {
//        super(props, context);
// // 设置默认值的时候用
//      }
     onChange=(e) => {
       const { bind, onChange } = this.props;
       const { model } = this.context;

      //  往model里塞值
       if (!isObservable(model)) {
         throw new Error('model 必须是observable');
       }
       const value = e.target.value;
       if (isObservableMap(model)) {
         model.set(bind, value);
       } else {
         model[bind] = value;
       }
       onChange(e);
     }

     getBindValue=(model, bindName) => {
      //  判断model是不是observable类型的，不是报错
       if (!isObservable(model)) {
         return new Error('model必须是observable类型的');
       }
      //  查找model里对应bindName的值
       return isObservableMap(model) ? model.get(bindName) : model[bindName];
     }

     render() {
       const { bind, ...props } = this.props;
       if (bind) {
         const { model } = this.context;

         if (!this.context.model) {
           throw new Error('找不到上层组件的model');
         }
         props.value = this.getBindValue(model, bind);
         props.onChange = this.onChange;
       }
       const defaultConfig = { placeholder: '请输入',
         className: 'w160' };
       return (<WrappedComponent {...defaultConfig} {...props} />);
     }
  }
   hoistNonReactStatic(Bind, WrappedComponent);// 把原组件的静态方法，绑定到新组件上
   return Bind;
 };
