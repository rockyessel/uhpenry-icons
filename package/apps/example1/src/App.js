import logo from './logo.svg';
import './App.css';
import { Icon } from 'uhpenry-icons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Icon name='React Router' theme='dark' size={50} />
        <Icon name='Vercel' theme='light' size={50} />
        <Icon name='Preact' theme='light' size={100} />
        <Icon name='Motion' theme='dark' size={10} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
