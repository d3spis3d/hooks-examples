class CountEffect extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  componentDidMount() {
    window.title = `Here is my count: ${this.state.count}`
  }

  componentDidUpdate() {
    window.title = `Here is my count: ${this.state.count}`
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
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
      </div>
    )
  }
}
