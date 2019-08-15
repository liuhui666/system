import React, { Component } from 'react';
import TaskCol from './TaskCol.js';
import TaskItem from './TaskItem.js';

const STATUS_TODO = 'STATUS_TODO';
const STATUS_DOING = 'STATUS_DOING';
const STATUS_DONE = 'STATUS_DONE';

const TASK_DATA = [{
  id: STATUS_TODO,
  title: '待处理',
  data: [{
    id: 1,
    status: STATUS_TODO,
    content: '写一个react拖拽实现记录',
  },
  {
    id: 2,
    status: STATUS_TODO,
    content: '搞懂redux中间件源码',
  }, {
    id: 3,
    status: STATUS_TODO,
    content: '学习react-router',
  }, {
    id: 4,
    status: STATUS_TODO,
    content: '学习css',
  }, {
    id: 5,
    status: STATUS_TODO,
    content: '学习算法',
  },
  {
    id: 6,
    status: STATUS_TODO,
    content: '前端学习之路真的是无止境',
  },
  {
    id: 7,
    status: STATUS_TODO,
    content: '有工作 也有生活才够好',
  },
  {
    id: 8,
    status: STATUS_TODO,
    content: '有生活又有乐趣才完美',
  },
  {
    id: 9,
    status: STATUS_TODO,
    content: '加油吧 你可以的',
  },
  ],
},
{
  id: STATUS_DOING,
  title: '进行中',
  data: [],
},
{
  id: STATUS_DONE,
  title: '已完成',
  data: [],
},
];


// const placeholder = <div style={{ height: 20, border: '1px dashed #eee' }} />;
const defaultFrom = { // 拖方信息
  itemIndex: null, // 拖拽元素在当前所在区域列的位置
  colId: null, // 拖拽元素所在的区域列的id（唯一标识）
  item: null, // 拖拽元素全部的信息
};
const defaultTo = { // 接收方信息
  colId: null, // 接收区域列的id（唯一标识）
};

export default class AdvancedDrag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: TASK_DATA,
      from: defaultFrom,
      to: defaultTo,
    };
  }
  handleDragStart = (itemIndex, colId, item) => {
    this.setState({
      from: {
        itemIndex,
        colId,
        item,
      },
    });
  }
  handleDragEnd = () => {
    this.setState({
      from: {},
    });
  }

  /**
   * 接收方
   */
  handleDragEnter = (colId) => {
    this.setState({
      to: {
        colId,
      },
    });
  }

  handleDragLeave = () => {
    this.setState({
      to: defaultTo,
    });
  }

  handleDrop = () => {
    const tasks = this.state.tasks;
    const { from, to } = this.state;
    const { itemIndex, item } = from;
    if (from.colId === to.colId) { // 如果在原来的区域拖放，不做处理
      return;
    }

    tasks.forEach((taskItem) => { // 把原列表拖拽的元素删除，push到新列表里
      if (taskItem.id === from.colId) {
        taskItem.data.splice(itemIndex, 1);
      } else if (taskItem.id === to.colId) {
        taskItem.data.push(item);
      }
    });
    this.setState({
      tasks,
      from: defaultFrom,
      to: defaultTo,
    });
  }
  render() {
    const { tasks, from, to } = this.state;
    return (<div >
      <div> 有拖放 有排序 </div>
      <div style={{ display: 'flex', height: 400, width: 700 }}>
        {
          tasks.map(item => < TaskCol
            id={item.id}
            title={item.title}
            onDragEnter={this.handleDragEnter}
            onDragOver={this.handleDragOver}
            onDragLeave={this.handleDragLeave}
            onDrop={this.handleDrop}
            active={from.itemIndex && from.colId !== to.colId && item.id === to.colId}
          >
            {
              item.data.map((i, index) =>
                <TaskItem
                  index={index}
                  data={i}
                  colId={item.id} // 所在区域的id
                  onDragStart={this.handleDragStart}
                  onDragEnd={this.handleDragEnd}
                  active={from.itemIndex === index}
                />)
            } </TaskCol>)
        } </div>
    </div>);
  }
}
