import './App.css';
import { Header } from './components/Header';
import { BodyComponent } from './components/Body';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <Outlet/>
    </div>
  );
}

export default App;
