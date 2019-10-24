const LoadingPage = ({ children }) => {
  const loading = useSelector((state) => state.uiState.loading)

  return loading ? <LoadingComponent /> : children
}
