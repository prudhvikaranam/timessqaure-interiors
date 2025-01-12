import './App.css';
import { Header } from './components/Header';
import { BodyComponent } from './components/Body';

function App() {
  return (
    <div className="app-container">
      <Header />
      <BodyComponent/>
    </div>
  );
}

export default App;
