/**
 * 可拖拽的元素
 *
 * 设置元素为可拖放。首先，为了使元素可拖动，把 draggable 属性设置为 true: <div draggle={true}/>


 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

class TaskItem extends React.Component {
  handleDragStart = () => {
    this.props.onDragStart(this.props.id);
  }
  render() {
    const { title, active, onDragEnd } = this.props;
    return (
      <div
        onDragStart={this.handleDragStart}
        onDragEnd={onDragEnd}
        className={`${active ? styles.activeItem : styles.item}`}
        draggable // 表示元素可拖拽
      >
        <div className={styles.itemMain}>{title}</div>
      </div>
    );
  }
}
TaskItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  onDragEnd: PropTypes.func,
  onDragStart: PropTypes.func,
  active: PropTypes.bool,
};

export default TaskItem;
