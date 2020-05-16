
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4> 
      <form>
        <div className="form group">
          <label htmlFor="fromEventTitle">タイトル</label>
          <input className="form-control" id="fromEventTitle" />
        </div>

        <div className="form group">
          <label htmlFor="fromEventBody">ボディ</label>
          <textarea className="form-control" id="fromEventBody" />
        </div>

        <button className="btn btn-primary">イベントを作成する</button>
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