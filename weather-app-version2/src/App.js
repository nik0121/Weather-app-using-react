import './App.css';
import Weather from './Weather';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Manila" />
        <footer>
          This project was coded by Nica Guevarra and is{" "}
          <a
            href="https://github.com/nik0121/Weather-app-using-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
