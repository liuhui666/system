import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import Menu from '../Menu';
import styles from './index.css';

const { Sider } = Layout;


export default class AppSider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.state.collapsed} className={styles.sider}>
        <div className={styles.siderTop} >
          {
          !this.state.collapsed && <img
            src={'http://5b0988e595225.cdn.sohucs.com/images/20171231/629cec9d19eb4c729847ae4ed34194bc.jpeg'}
            alt="logo"
            className={styles.logo}
          />
         }
          <Icon
            className={styles.trigger}
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
          />
        </div>

        <Menu />
      </Sider>
    );
  }
}
