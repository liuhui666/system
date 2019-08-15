import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';


export default class TaskItem extends Component {
  onDragStart=() => {
    // 我们能知道拖拽的是哪个元素
    const { onDragStart, index, colId, data } = this.props;
    onDragStart(index, colId, data);
  }

  render() {
    const { data, active } = this.props;
    return (<div
      onDragStart={this.onDragStart}
      onDragEnd={this.props.onDragEnd}
      draggable
      className={`${styles.item} ${active && styles.activeItem}`}
    >
      {data.content}
    </div>);
  }
}

TaskItem.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
  colId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 所在区域的标识
  onDragEnd: PropTypes.func,
  onDragStart: PropTypes.func,
  active: PropTypes.bool,
};
