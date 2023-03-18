//1.导入react
import React from 'react'
import ReactDOM from 'react-dom'

//引入css
import './index.css'

//2 创建react元素
//const title = React.createElement('h1', null, 'Hello React ！！！')
const name = 'Jack'
const age = 18

const title = (
    <h1>
        Hello JSX,{name},年龄：{age}
    </h1>
)

//函数调用表达式
const sayHi = () => 'Hi~'

const title1 = (
    <h1>
        Hello JSX
        <p>{1}</p>
        <p>{'a'}</p>
        <p>{1 + 7}</p>
        <p>{3 > 5 ? '大于' : '小于等于'}</p>
        <p>{sayHi()}</p>
        {/*错误演示 */}
        {/*<p>{ {a:'6'} }</p> */}
        {/*{ if (true) {} } */}
        {/*{ for (var i = 0; i < 10; i++) {} } */}
    </h1>
)

const p1 = <span>我是JSX</span>

const isLoading = true
//if-else
// const loadData = () => {
//     if (isLoading) {
//         return <div>loading ...</div>
//     }

//     return <div>数据加载完成，此处显示加载后的数据</div>
// }

//三元表达式
const loadData = () => {
    return isLoading ? (<div>loading ...</div>) : (<div>数据加载完成，此处显示加载后的数据</div>)
}

//逻辑与运算符
// const loadData = () => {
//     return isLoading && (<div>loading ...</div>)
// }


const dv = (
    <div>
        嵌入表达式：{p1}
        <h1>{loadData()}</h1>
    </div>
)

//歌曲列表：
const songs = [
    {id: 1, name: '痴心绝对'},
    {id: 2, name: '像我这样的人'},
    {id: 3, name: '南山南'},
]

const list = (
    <ul className= 'title' style={{ color: 'red', backgroundColor: 'skyblue'}}>
        {songs.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
)

//3 渲染react元素
//ReactDOM.render(title, document.getElementById('root'))
ReactDOM.render(title, document.getElementById('root'))
ReactDOM.render(title1, document.getElementById('root-1'))
ReactDOM.render(dv, document.getElementById('root-2'))
ReactDOM.render(list, document.getElementById('root-3'))