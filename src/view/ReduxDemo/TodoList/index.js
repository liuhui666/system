import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import App from 'BizComponent/App';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = state =>  // 参数就是store里的值
   ({
     ...state,
   });
const mapDispatchToProps = dispatch => ({ // 对store的数据修改  store.dispatch挂在到props
  inputChange: (e) => {
    const action = {
      type: 'change_input_value',
      payload: e.target.value,
    };
    dispatch(action);
  },
  submit: () => {
    const action = {
      type: 'add_todo',
    };
    dispatch(action);
  },
  delete: (index) => {
    const action = {
      type: 'del_todo',
      payload: index,
    };
    dispatch(action);
  },
});
class TodoList extends Component {

  render() {
    return (
      <App>
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
          <Input
            value={this.props.inputValue}
            placeholder="请输入待办事项"
            style={{ width: 300 }}
            onChange={this.props.inputChange}
          />
          <Button onClick={this.props.submit}>提交</Button>
        </div>
        <List
          style={{ marginTop: '10px', width: '300px' }}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (<List.Item>{
            <div style={{ display: 'flex', width: '100%' }}>
              <div style={{ flex: 1 }}>{item}</div>
              <div style={{ width: 50, cursor: 'pointer' }}onClick={() => { this.props.delete(index); }}>删除</div>
            </div>
          }</List.Item>)}
        />
      </App>
    );
  }
}
TodoList.propTypes = {
  inputValue: PropTypes.string,
  list: PropTypes.array,
  inputChange: PropTypes.func,
  submit: PropTypes.func,
  delete: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
