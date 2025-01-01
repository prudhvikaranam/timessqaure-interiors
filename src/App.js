import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { BodyComponent } from './components/Body';

function App() {
  return (
    <div className="App">
      <Header />

      <BodyComponent/>

    </div>
  );
}

export default App;
