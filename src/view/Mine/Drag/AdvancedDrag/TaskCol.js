import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

export default class TaskCol extends Component {
  onDragEnter=() => {
  // 记录进入哪一个任务列区域了
    const { id, onDragEnter } = this.props;
    onDragEnter(id);
  }

  onDragOver=(e) => {
    // 默认地，无法将数据/元素放置到其他元素中。如果需要设置允许放置，我们必须阻止对元素的默认处理方式。这要通过调用ondragover 事件的 event.preventDefault()
    // 如果不阻止dragover的默认行为，drop就不会触发
    e.preventDefault();
    this.props.onDragOver(e);
  }

  render() {
    const { title, children, active, id } = this.props;
    return (<div className={styles.colWrapper}>
      <div className={styles.colHeader}>{title}</div>
      <div
        className={`${styles.listWrapper} ${active && styles.activeListWrapper}`}
        data-id={id}
        onDragEnter={this.onDragEnter}
        onDragOver={this.onDragOver}
        onDrop={this.props.onDrop}
      >
        {children}
      </div>
    </div>);
  }
}

TaskCol.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  onDrop: PropTypes.func,
  onDragEnter: PropTypes.func,
  active: PropTypes.bool,
  children: PropTypes.node,
  onDragOver: PropTypes.func,
};

TaskCol.defaultProps = {
  onDragLeave: () => {},
  onDragEnter: () => {},
  onDragOver: () => {},
};
