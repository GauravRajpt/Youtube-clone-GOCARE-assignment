
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';



function App() {
  return (
    <div className="App w-[100vw] pr-1">
   
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
