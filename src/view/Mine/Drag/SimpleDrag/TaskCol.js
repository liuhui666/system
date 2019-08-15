import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const STATUS_CODE = {
  STATUS_TODO: '待处理',
  STATUS_DOING: '进行中',
  STATUS_DONE: '已完成',
};

class TaskCol extends React.Component {
  handleDragOver = (e) => {
    e.preventDefault();
    this.props.dragOver(this.props.status);
  }
  handleDrop = (e) => {
    e.preventDefault();
    this.props.dragTo(this.props.status);
  }

  render() {
    const { status, children, active } = this.props;

    return (
      <div
        id={`col-${status}`}
        className={styles.col}
        onDragOver={this.handleDragOver}
        onDragLeave={this.props.dragLeave}
        onDrop={this.handleDrop}
      >
        <header className={styles.colHeader}>
          {STATUS_CODE[status]}
        </header>
        <div className={`${active ? styles.activeColMain : styles.colMain}`}>
          {children}
        </div>
      </div>
    );
  }
}
TaskCol.propTypes = {
  status: PropTypes.string,
  dragTo: PropTypes.func,
  children: PropTypes.node,
  dragOver: PropTypes.func,
  active: PropTypes.bool,
  dragLeave: PropTypes.func,
};
export default TaskCol;
