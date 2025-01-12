import './App.css';
import { Header } from './components/Header';
import { BodyComponent } from './components/Body';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
