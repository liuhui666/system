import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import data from './data.json';
import styles from './index.css';

const { SubMenu, Item: MenuItem } = Menu;

const sort = (a, b) => a.sort - b.sort;  // 升序排序

export default class AppMenu extends Component {
  render() {
    const key = window.location.pathname;
    const openKey = key.split('/').slice(0, 2).join('/');
    return (
      <div className={styles.menuList}>
        <Menu
          defaultOpenKeys={[openKey]}
          mode="inline"
          theme="dark"
          // openKeys={['/ReduxDemo']}// 当前选中的菜单项 key 数组
          selectedKeys={[key]}// 当前展开的 SubMenu 菜单项 key 数组
        >
          {
            data.data.sort(sort).map((item) => {
              if (item.childList.length > 0) {
                return (<SubMenu title={item.name} key={item.path}>
                  {item.childList.sort(sort).map(subItem =>
                    <MenuItem title={subItem.name} key={subItem.path}>
                      <Link to={subItem.path}>
                        {subItem.name}
                      </Link>
                    </MenuItem>
                  )}
                </SubMenu>);
              }
              return (<MenuItem title={item.name} key={item.path}>
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
