import './App.css'
import Counter from './components/Counter/Counter'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar title="Hover me!" />
      <Counter />
    </div>
  )
}

export default App
