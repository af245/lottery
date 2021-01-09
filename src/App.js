
import './App.css';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <Lottery/>

      <Lottery title='Cash 5' maxNum={15} numBalls={5}/>
    </div>
  );
}

export default App;
