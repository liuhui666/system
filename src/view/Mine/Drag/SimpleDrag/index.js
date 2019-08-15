/**
 * 这个有个问题 就是元素的顺序 永远都是最初列表的内的排序
 *
 * 受到了原始数据结构的限制！
 */
import React from 'react';
import TaskCol from './TaskCol';
import TaskItem from './TaskItem';
import styles from './index.css';

const STATUS_TODO = 'STATUS_TODO';
// const STATUS_DOING = 'STATUS_DOING';
// const STATUS_DONE = 'STATUS_DONE';

// 三个接收拖拽的状态容器
const STATUS_CODE = {
  STATUS_TODO: '待处理',
  STATUS_DOING: '进行中',
  STATUS_DONE: '已完成',
};
// 可拖拽元素数据，通过status属性标识出来属于哪个状态容器的
const TASKS = [{
  id: 0,
  status: STATUS_TODO,
  title: '外边只有自己，没有别人',
}, {
  id: 1,
  status: STATUS_TODO,
  title: '学习学习 各种学习',
}, {
  id: 2,
  status: STATUS_TODO,
  title: '卷腹卷腹，腹肌搞起来',
}, {
  id: 3,
  status: STATUS_TODO,
  title: '有工作有生活，才行',
}, {
  id: 4,
  status: STATUS_TODO,
  title: '有生活有兴趣，完美',
}, {
  id: 5,
  status: STATUS_TODO,
  title: '好好努力 好好学习 好好活着',
}];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: TASKS,
      activeItemId: null, // 当前拖拽的元素id
      activeColId: null,
    };
  }

  onDragStart = (id) => {
    // 元素开始拖拽时，记录
    this.setState({
      activeItemId: id,
    });
  }

  dragTo = (status) => {
    const { tasks, activeItemId } = this.state;
    const task = tasks[activeItemId];
    if (task.status !== status) {
      task.status = status;
      this.setState({
        tasks,
      });
    }
    this.cancelSelect();
    this.setState({ activeColId: null });
  }

  dragOver=(activeColId) => {
    this.setState({ activeColId });
  }
  dragLeave=() => {
    this.setState({ activeColId: null });
  }
  cancelSelect = () => {
    // 元素结束拖拽时，清空
    this.setState({
      activeItemId: null,
    });
  }


  render() {
    const { tasks, activeItemId } = this.state;
    const { onDragStart, cancelSelect } = this;
    return (
      <div>
        <div>只有拖放没有排序</div>
        <div className={styles.taskWrapper}>
          {
          Object.keys(STATUS_CODE).map(status =>
            <TaskCol
              status={status}
              key={status}
              dragTo={this.dragTo}
              dragOver={this.dragOver}
              dragLeave={this.dragLeave}
              active={this.state.activeColId === status}
            >
              {/* 根据元素的状态 判断出来该展示在哪个状态容器里 */}
              {tasks.filter(t => t.status === status).map(t =>
                <TaskItem
                  key={t.id}
                  active={t.id === activeItemId}
                  id={t.id}
                  title={t.title}
                  onDragStart={onDragStart}
                  onDragEnd={cancelSelect}
                />)
              }
            </TaskCol>
          )
        }
        </div>
      </div>
    );
  }
}

export default App;
