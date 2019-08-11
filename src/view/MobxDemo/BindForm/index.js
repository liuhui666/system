import React, { Component } from 'react';
import Input from 'BizComponent/Input';
import App from 'BizComponent/App';
import Form from 'BizComponent/Form';
import refers from 'BizComponent/refers.js';
import { observable } from 'mobx';

class Store {
  @observable model = {}
}

const store = new Store();

export default class BindForm extends Component {
  render() {
    return (<App>
      <Form
        model={store.model}
        name="form"
        onSubmit={() => {
          const data = refers.form.model();
          console.log(data);
        }}
      >
        <div> 姓名： <Input bind="name" /></div>
      </Form>
    </App>);
  }
}
