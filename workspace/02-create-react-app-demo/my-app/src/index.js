//1.导入react
import React from 'react'
import ReactDOM from 'react-dom'

//2 创建react元素
//const title = React.createElement('h1', null, 'Hello React ！！！')
const title = <h1>Hello JSX</h1>

//3 渲染react元素
//ReactDOM.render(title, document.getElementById('root'))
ReactDOM.render(title, document.getElementById('root'))