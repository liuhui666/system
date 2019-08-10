import React, { Component } from 'react';
import { Avatar, Popover, Icon } from 'antd';
import styles from './index.css';


export default class AppHeader extends Component {
  render() {
    return (
      <div className={styles.header}>
        <Popover
          placement="bottomRight"
          title={'hui.liu'}
          content={<div className={styles.exitContainer}>
            <div className={styles.exit} onClick={() => {}}>
              退出登录 <Icon type="logout" />
            </div>
          </div>}
          trigger="hover"
        >
          <Avatar
            icon="user"
            style={{ backgroundColor: '#739BFF', cursor: 'pointer' }}
            className={styles.order_comp}
          />
        </Popover>
      </div>
    );
  }
}
