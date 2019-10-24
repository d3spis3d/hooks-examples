const LoginPage = () => {
  const handleSubmit = useCallback((event) => {
    sendApiRequest(event.data)
  }, [])

  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm handleSubmit={handleSubmit} />
    </div>
  )
}
