import React, { Component } from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import Sider from './Sider';
import Header from './Header';
import styles from './index.css';


const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className={styles.container}>
        <Sider />
        <Layout>
          <Header />
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            这里是内容
            {
              this.props.children
            }
          </Content>
        </Layout>
      </Layout>
    );
  }
}
App.propTypes = {
  children: PropTypes.element,
};


export default App;
