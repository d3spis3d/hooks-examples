class LoginPage extends React.Component {
  handleSubmit(event) {
    sendApiRequest(event.data)
  }

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <LoginForm handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}
