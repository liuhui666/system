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
        <Layout className={styles.innerContainer}>
          <Header />
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
              height: '100%',
              overflow: 'auto',
            }}
          >
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
