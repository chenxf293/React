import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import img from './images/cat-clipart-transparent-background-12.png'

/**
 * 高阶组件
 */

//创建高阶组件
function withMouse(WrappedComponent) {
  //该组件提供复用的状态逻辑
  class Mouse extends React.Component {
    //鼠标位置state
    state = {
      x: 0,
      y: 0
    }
  
    //鼠标移动事件的事件处理程序
    handleMouseMove = e => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }
  
    //监听鼠标移动事件
    componentDidMount() {
      window.addEventListener('mousemove',this.handleMouseMove)
    }
  
    //推荐：在组件卸载时移除事件绑定
    componentWillUnmount() {
      window.removeEventListener('mousemove', this.handleMouseMove)
    }
  
    render() {
      return <WrappedComponent {...this.state} {...this.props}></WrappedComponent>
    }
  }

  //设置displayName
  Mouse.displayName = `withMouse${getDisplayName(WrappedComponent)}`

  return Mouse
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

//用来测试高阶组件
const Position = props => {
  console.log('position', props)
  return (
    <p>
    鼠标当前位置：（x: {props.x}, y: {props.y}）
  </p>
  )
}

//猫捉老鼠组件
const cat = props => {
  console.log('mousecat', props)
  return (
    <img src={img} alt='猫' style={{
      position: 'absolute',
      top: props.y - 25,
      left: props.x - 25
    }} width='50px' height='50px'/>
  )
}

//获取增强后的组件
const MousePosition = withMouse(Position)

//调用高阶组件来增强猫捉老鼠的组件
const MouseCat = withMouse(cat)

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>高阶组件</h1>
        {/* 渲染增强后的组件 */}
        <MousePosition a='1'></MousePosition>
        <MouseCat b='2'></MouseCat>
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

