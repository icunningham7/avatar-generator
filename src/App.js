import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Avatar Generator</h1>
      </header>

      <main>
        <div className="avatar">
          <img src={logo} className="avatar" alt="avatar" />
          <button className="square" id="randomize-avatar">
            <img src={logo} alt="randomize your avatar" />
            Random
          </button>
          <button className="square" id="download-avatar">
            <img src={logo} alt="download your avatar" />
            Download
          </button>
        </div>
        <div className="controls">
          <div>
            <h2>Accessorize the Avatar</h2>
            <button className="pill">Hair</button>
            <button className="pill">Ears</button>
            <button className="pill">Eyes</button>
            <button className="pill">Mouth</button>
            <button className="pill">Neck</button>
            <button className="pill">Leg</button>
            <button className="pill">Accessories</button>
            <button className="pill">Background</button>
          </div>
          <div>
            <h2>Style</h2>
            <button className="pill">Default</button>
            <button className="pill">Curls</button>
            <button className="pill">Short</button>
            <button className="pill">Bang</button>
            <button className="pill">Elegant</button>
            <button className="pill">Quiff</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
