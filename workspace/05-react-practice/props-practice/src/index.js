import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/**
 * props
 */



//2 接收数据
// class Hello extends React.Component {
  
//   render() {
//     this.props.fn()
//     return (
//       <div>
//        <h1>props: {this.props.age}</h1>
//        {this.props.tag}
//      </div>
//     )
//   }
// }

// const Hello = (props) => {
//   return (
//     <div>
//       <h1>props: {props.name}</h1>
//     </div>
//   )
// }

/**
 * 子组件给父组件传递信息
 */

// class Parent extends React.Component {
//   state = {
//     parentMsg: ''
//   }

//   //提供回调函数，用来接收数据
//   getChildMsg = data => {
//     console.log('接收到子组件中传递过来的数据：', data)
//     this.setState({
//       parentMsg: data
//     })
//   }

//   render() {
//     return (
//       <div className='parent'>
//         父组件：{this.state.parentMsg}
//         <Child getMsg = {this.getChildMsg} />
//       </div>
//     )
//   }
// }

//子组件
// class Child extends React.Component {
//   state = {
//     msg:'刷抖音'
//   }

//   handleClick = () => {
//     //子组件调用父组件中传递过来的回调函数
//     this.props.getMsg(this.state.msg)
//   }

//   render() {
//     return (
//       <div className='child'>
//         子组件：{''}
//         <button onClick={this.handleClick}>点我，给父组件传递数据</button>
//       </div>
//     )
//   }
// }

/**
 * 兄弟组件通讯
 */
class Counter extends React.Component {
  //提供共享状态
  state = {
    count: 0
  }

  //提供修改状态的方法
  onIncrement = () => {
    this.setState({
      count:this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <Child1 count={this.state.count} />
        <Child2 onIncrement={this.onIncrement} />
      </div>
    )
  }
}

const Child1 = props => {
  return <h1>计数器：{props.count}</h1>
}

const Child2 = props => {
  return <button onClick={() => props.onIncrement()}>+1</button>
}

const root = ReactDOM.createRoot(document.getElementById('root'));


//1 传递数据
// root.render(
//   <Hello 
//     name='Jack' 
//     age={19} 
//     colors={['red','green','blue']}
//     fn={() => console.log('这是一个函数')}
//     tag={<p>这是一个p标签</p>}
//   />
// );
// root.render(<Parent />)
root.render(<Counter />)





