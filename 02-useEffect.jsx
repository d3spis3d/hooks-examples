const CountEffect = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `Here is my count: ${count}`
  }, [count])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}
