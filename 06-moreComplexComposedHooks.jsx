function usePrefersDarkMode() {
  // pretend new Browser API for dark mode lovers
  return window.weLoveDarkMode
}

function useDarkMode() {
  const [enabledState, setEnabledState] = useLocalStorage("dark-mode-enabled")

  const prefersDarkMode = usePrefersDarkMode()

  const enabled = typeof enabledState !== "undefined" ? enabledState : prefersDarkMode

  useEffect(() => {
    const className = "dark-mode"
    const element = window.document.body
    if (enabled) {
      element.classList.add(className)
    } else {
      element.classList.remove(className)
    }
  }, [enabled])

  return [enabled, setEnabledState]
}

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <div>
      <div className="navbar">
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <Content />
    </div>
  )
}
