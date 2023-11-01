import logo from './logo.svg';
import './App.css';
import AppBar from './components/Appbar.js';
import Student from './components/Student';

function App() {
  return (
    <div className="App">
      <AppBar/>
      <Student/>
    </div>
  );
}

export default App;
