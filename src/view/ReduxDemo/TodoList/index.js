import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import App from 'BizComponent/App';

export default class TodoList extends Component {
  render() {
    return (
      <App>
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
          <Input placeholder="请输入待办事项" />
          <Button>提交</Button>
        </div>
        <List
          style={{ marginTop: '10px', width: '300px' }}
          bordered
          dataSource={[]}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </App>
    );
  }
}
