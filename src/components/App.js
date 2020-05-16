
import React,{ useReducer, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()

    dispatch({
     type: 'CREATE_EVENT',  //actionはtypeが必須
     title,
     body
    })

    setTitle('')
    setBody('')
  }

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4> 
      <form>
        <div className="form group">
          <label htmlFor="fromEventTitle">タイトル</label>
          <input className="form-control" id="fromEventTitle" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>

        <div className="form group">
          <label htmlFor="fromEventBody">ボディ</label>
          <textarea className="form-control" id="fromEventBody" value={body} onChange={e => setBody(e.target.value)}/>
        </div>

        <button className="btn btn-primary" onClick={addEvent}>イベントを作成する</button>
        <button className="btn btn-danger">全てのイベントを削除する</button>
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">タイトル</th>
            <th scope="col">ボディー</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      </div>
  )
}

export default App