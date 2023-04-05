import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PropTypes from 'prop-types';
import img from './images/cat-clipart-transparent-background-12.png'

/**
 * render props 模式
*/

//创建Mouse组件
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
    // return this.props.render(this.state)
    return this.props.children(this.state)
  }
}

//添加props校验
Mouse.propTypes = {
  children: PropTypes.func.isRequired
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>render props 模式</h1>
        {/* <Mouse render={(mouse) => {
          return (
          <p>
            鼠标位置：x:{mouse.x} y:{mouse.y}
          </p>
          )
        }}></Mouse> */}
        <Mouse>
          {mouse => {
            return (
              <p>
                鼠标位置：x:{mouse.x} y:{mouse.y}
              </p>
              )
          }}
        </Mouse>

        {/* 猫捉老鼠 */}
        {/* <Mouse render={(mouse => {
          return <img src={img} alt='猫' style={{
            position: 'absolute',
            top: mouse.y - 25,
            left: mouse.x - 25
          }} width='50px' height='50px'/>
        })}></Mouse> */}
        <Mouse>
          { mouse => {
          return <img src={img} alt='猫' style={{
              position: 'absolute',
              top: mouse.y - 25,
              left: mouse.x - 25
            }} width='50px' height='50px'/>
          }}
        </Mouse>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

