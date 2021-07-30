import './App.css';
import Buttons from './Components/buttons/Buttons';
import Escena from './Components/escena/Escena'

const App = _ => {
  return (
    <div>
      <Buttons />
      <Escena param='0' />
      <Escena param='1' />
      <Escena param='2' />
      <Escena param='3' />

    </div>
  );
}

export default App;
