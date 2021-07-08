import './App.css';
import Dragdrop from './component/Dragdrop.js';
function App() {
const data=[
{title: 'g1' , items:['1','2','3']},
{title: 'g2' , items:['5','6']},
{title: 'g3' , items:['7','8','9','10']},

]
  return (
    <div className="App">
      <h2>Drag Drop List</h2>
      <Dragdrop data={data}/>
    </div>
  );
}

export default App;
