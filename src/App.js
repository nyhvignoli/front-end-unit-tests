import './App.css';
import Content from './components/Content/Content';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar title='Hello World'/>
      <Content />
    </div>
  );
}

export default App;
