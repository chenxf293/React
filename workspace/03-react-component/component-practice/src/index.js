import React from 'react';
import ReactDOM from 'react-dom';

//导入Hello组件
//import Hello from './Hello';

/**
 * 函数组件
 */

// function Hello() {
//   return (
//     <div>这是我的第一个函数组件！</div>
//   )
// }

// function Hello() {
//   return null
// }

// const Hello = () => <div>这是我的第一个函数组件！</div>

/**
 * 类组件
 */

//创建类组件
// class Hello extends React.Component {
//   render() {
//     return(
//       <div>这是我的第一个函数组件！</div>
//     )
//   }
// }


/**
 * React事件处理
 */

// class App extends React.Component {
//   //事件处理程序
//   handleClick() {
//     console.log('单击事件触发了')
//   }
//   render() {
//     return (
//       <button onClick={this.handleClick}>点我，点我</button>
//     )
//   }
// }

//通过函数组件绑定事件：
// function App() {
//   function handleClick() {
//     console.log('单击事件触发了')
//   }
//   return (
//     <button onClick={handleClick}>点我，点我</button>
//   )
// }


/**
 * React事件对象
 */

// class App extends React.Component {
//   handleClick(e) {
//     //阻止浏览器的默认行为
//     e.preventDefault()
//     console.log('a标签的单击事件触发了')
//   }
//   render() {
//     return (
//       <a href='http://www.google.com' onClick={this.handleClick}>Google</a>
//     )
//   }
// }

/**
 * state的基本使用
 */
class App extends React.Component {
  // constructor() {
  //   super()
  //   //初始化state
  //   this.state = {
  //     count: 0
  //   }
  // }

  //简化语法初始化state
  state = {
    count: 0
  }

  //事件处理程序
  onIncrement = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <h1>计数器：{this.state.count}</h1>
        <button onClick={this.onIncrement}>+1</button>
        {/* <button onClick={()=>{
          this.setState({
            count: this.state.count + 1
          })
        }}>+1</button> */}
      </div>
    )
  }
}

class Form extends React.Component {
  state = {
    txt: '',
    content: '',
    city: 'sh',
    isChecked: false
  }
  // //处理文本框的变化
  // handleChange = e => {
  //   this.setState({
  //     txt:e.target.value
  //   })
  // }
  // //处理富文本框的变化
  // handleContent = e => {
  //   this.setState({
  //     content:e.target.value
  //   })
  // }
  // //处理下拉框的变化
  // handleCity = e => {
  //   this.setState({
  //     city:e.target.value
  //   })
  // }
  // //处理复选框的变化
  // handleChecked = e => {
  //   this.setState({
  //     isChecked:e.target.checked
  //   })
  // }
  handleForm = e => {
    //获取当前DOM对象
    const target = e.target

    //根据类型获取值
    const value = target.type === 'checkbox'
      ?target.checked
      :target.value

    //获取name
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        {/* 文本框 */}
        <input type="text" name="txt" value={this.state.txt} onChange={this.handleForm} />
        <br/>

        {/* 富文本框 */}
        <textarea name="content" value={this.state.content} onChange={this.handleForm} />
        <br/>

        {/* 下拉框 */}
        <select name="city" value={this.state.city} onChange={this.handleForm}>
          <option value="sh">上海</option>
          <option value="bj">北京</option>
          <option value="gz">广州</option>
        </select>
        <br/>

        {/* 复选框 */}
        <input name="isChecked" type="checkbox" checked={this.state.isChecked} onChange={this.handleForm} />
      </div>
    )
  }
}

class Form1 extends React.Component {
  constructor() {
    super()

    //创建ref
    this.txtRef = React.createRef()
  }

  //获取文本框的值
  getTxt = () => {
    console.log('文本框值为：', this.txtRef.current.value);
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.txtRef}></input>
        <button onClick={this.getTxt}>获取文本框的值</button>
      </div>
    )
  }
}

//渲染组件
//ReactDOM.render(<Hello />,document.getElementById('root'))
// ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.render(<Form />, document.getElementById('root'))
ReactDOM.render(<Form1 />, document.getElementById('root'))