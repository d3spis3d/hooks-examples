const LoadingPage = ({ loading, children }) => {
  return loading ? <LoadingComponent /> : children
}

function mapStateToProps(state) {
  return {
    loading: this.state.uiState.loading,
  }
}

const ConnectedLoadingPage = connect(mapStateToProps)(LoadingPage)
