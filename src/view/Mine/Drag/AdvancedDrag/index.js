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


const placeholder = <div style={{ height: 40, border: '1px dashed pink' }} />;
const defaultFrom = { // 拖方信息
  itemIndex: null, // 拖拽元素在当前所在区域列的位置
  colId: null, // 拖拽元素所在的区域列的id（唯一标识）
  item: null, // 拖拽元素全部的信息
};
const defaultTo = { // 接收方信息
  colId: null, // 接收区域列的id（唯一标识）
  toIndex: null, // 接收区域接收的元素位置
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
        ...this.state.to,
        colId,
      },
    });
  }

  handleDragLeave = () => {
    this.setState({
      to: defaultTo,
    });
  }
  getContainer=(ele) => {
    // 准确的找到接收方
    while (!ele.dataset.id) {
      ele = ele.parentNode;
    }
    return ele;
  }
  handleDragOver=(e) => {
     // （拿到当前区域的scrollTop+ 鼠标所在元素距离区域顶部的offsetTop）/元素高度 = 鼠标在第几个元素上

    // 直接e.offsetTop e.target结果是null。正确用法是从e.nativeEvent里取值
    const srcollDiv = this.getContainer(e.nativeEvent.target);
    const scrollTop = srcollDiv.scrollTop;
    // 实际上这个layerY属性的值才是距离顶部的距离。注意的是！！item元素不要加postion或者overflow属性，会影响到这layer值的准确性。虽然我也不知道为什么
    const offsetY = e.nativeEvent.layerY;
    const index = Math.floor((scrollTop + offsetY) / 40);// 40是item的高度

    if (index !== this.state.to.toIndex) {
      this.setState({ to: { ...this.state.to, toIndex: index } });
    }
  }

  handleDrop = () => {
    const tasks = this.state.tasks;
    const { from, to } = this.state;
    const { itemIndex, item } = from;

    tasks.forEach((taskItem) => {
      if (taskItem.id === from.colId && taskItem.id === to.colId) {
        taskItem.data.splice(itemIndex, 1);
        taskItem.data.splice(to.toIndex, 0, item);
      } else if (taskItem.id === from.colId) {
        taskItem.data.splice(itemIndex, 1);
      } else if (taskItem.id === to.colId) {
        taskItem.data.splice(to.toIndex, 0, item);// 这加一
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
              item.data.map((i, index) => {
                const div = (<TaskItem
                  index={index}
                  data={i}
                  colId={item.id} // 所在区域的id
                  onDragStart={this.handleDragStart}
                  onDragEnd={this.handleDragEnd}
                  active={from.itemIndex === index && to.colId === item.id}
                />);
                // 这个占位样式加的 其实没有那么的准确。并不完全是 占位在哪，元素就会移到哪里。最准确的是元素会放在新元素上就会占据新元素的位置
                return to.colId === item.id && to.toIndex === index ? [div, placeholder] : div;
              })
            } </TaskCol>)
        } </div>
    </div>);
  }
}
