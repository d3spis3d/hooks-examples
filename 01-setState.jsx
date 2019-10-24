class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  add() {
    this.setState({ count: this.state.count + 1 })
  }

  subtract() {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
      </div>
    )
  }
}
