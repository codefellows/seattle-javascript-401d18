import './styles/main.scss'
import React from 'react'
import ReactDom from 'react-dom'


class Navbar extends React.Component {
  render() {
    return (
      <header className="app-header container">
        <h1>Counter App</h1>
        <nav>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </nav>
      </header>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }

  render() {
    return (
      <div className="application">
        <Navbar />
        <p onClick={this.handleClick}>Counter: {this.state.count}</p>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))