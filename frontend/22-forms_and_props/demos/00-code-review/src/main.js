import './styles/main.scss'

import React from 'react'
import ReactDom from 'react-dom'
import cowsay from 'cowsay-browser'
import faker from 'faker'

class MyReusable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'some text'
    }
  }

  render() {
    return (
      <p className="myP">{this.state.text}</p>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cows: [],
      current: '',
      content: cowsay.say({ text: 'click the button or select an option...' }),
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    cowsay.list((err, cows) => {
      let current = cows[0]
      this.setState({ cows: cows, current: current })
    })
  }

  handleClick(e) {
    let current = e.target.value ? e.target.value : this.state.current
    let text = faker.hacker.phrase()
    this.setState({current, content: cowsay.say({text, f: current})})
  }

  render() {
    return (
      <div className="application">
        <h1>Welcome to Cowville</h1>
        <select onChange={this.handleClick}>
          {this.state.cows.map((cow, i) => {
            return <option key={i} value={cow}>{cow}</option>
          })}
        </select>
        <button onClick={this.handleClick}>click to speak</button>

        <pre>
          <code>
            {this.state.content}
          </code>
        </pre>

        <MyReusable />
        <MyReusable />
        <MyReusable />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))

