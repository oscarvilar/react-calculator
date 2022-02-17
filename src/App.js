import './App.css';
import Keys from './components/keys/Keys';
import Screen from './components/screen/Screen';

function App() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <Screen/>
        <Keys/>
      </div>
      <p>*Proyecto realizado para practicar con React.js y Recoil</p>
    </div>
  );
}

export default App;
