import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import data from './data.json';
import styles from './index.css';

const { SubMenu, Item: MenuItem } = Menu;

const sort = (a, b) => a.sort - b.sort;  // 升序排序

export default class AppMenu extends Component {
  render() {
    return (
      <div className={styles.menuList}>
        <Menu
          defaultSelectedKeys={['1']}
          // defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
          {
            data.data.sort(sort).map((item) => {
              if (item.childList.length > 0) {
                return (<SubMenu title={item.name} key={item.id}>
                  {item.childList.sort(sort).map(subItem =>
                    <MenuItem title={subItem.name} key={subItem.id}>
                      <Link to={subItem.path}>
                        {subItem.name}
                      </Link>
                    </MenuItem>
                  )}
                </SubMenu>);
              }
              return (<MenuItem title={item.name} key={item.id}>
                <Link to={item.path}>
                  {item.name}
                </Link>
              </MenuItem>);
            })
          }
        </Menu>
      </div>
    );
  }
}
