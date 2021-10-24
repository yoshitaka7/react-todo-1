import React, { Component } from 'react';
import './App.css';
import './style.scss'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      word: "",
      todo: []
    }

    this.getText = this.getText.bind(this);
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  getText(e) {
    this.setState({word: e.target.value})
  }

  addTask(word) {
    this.setState({
      todo: this.state.todo.concat(word),
      word: ''
    })
  }

  removeTask(i) {
    const { todo } = this.state;
    todo.splice(i, 1);
    this.setState({ todo: todo });
  }


  render() {
    const { word, todo } = this.state;

    return (
      <div className="container">
        <h1>ToDo　List</h1>

        <form>
          <input type="text" value={word} onChange={this.getText}/>
          <button type="button" onClick={() => this.addTask(word)}>追加</button>
        </form>

        <ul className="List">
          {todo.map((item, i) => {
            return (
              <li className="List__item" key={i}>
                <p className="List__item--text">{item}</p>
                <button className="List__item--btn" onClick={() => this.removeTask(i)}></button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
