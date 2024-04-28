import logo from './images/spacelogo.jpg';
import './App.css';

function App() {  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <p>
          
          Shiv Patel
        </p>
        <a
          className="App-link"
          href="https://Github.com/shivpvtel"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </header>
    </div>
  );
}

export default App;
