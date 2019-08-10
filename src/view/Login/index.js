import React, { Component } from 'react';
import styles from './index.css';


class NotFound extends Component {

  // onClick = () => {
  //   History.push('/Home');
  // }

  render() {
    return (<div className={styles.forbiddenWrapper}>
      <div className={styles.forbiddenInner}>
        <div className={styles.forbiddenMoon} />
        <div className={styles.forbiddenTextBox}>
          <p className={styles.forbiddenStatus}>404</p>
          <p className={styles.forbiddenErr}>很抱歉,您访问的页面找不到了</p>
          <div className={styles.goHome} id="rbacInfo">
            <a onClick={this.onClick}>回到首页</a>
          </div>
        </div>
        <div className={styles.forbiddenCloudLeft} />
        <div className={styles.forbiddenCloudRight} />
      </div>
    </div>);
  }
}
export default NotFound;

