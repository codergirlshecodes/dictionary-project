import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      </header>
      <main>
      <Dictionary defaultKeyword="hello"/>
      </main> 
      <footer className="App-footer"><small>Coded by Alexa Cacchiola</small> and is open-sourced on <a href="https://github.com/codergirlshecodes/dictionary-project">GitHub </a>and hosted on Netlify.</footer>
      </div>
    </div>
  );
}

export default App;
