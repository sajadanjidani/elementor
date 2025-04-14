import './App.css';
import Navbar from './component/navbar/navbar';
import Header from './component/header/header';
import Gadgets from './component/gadgets/gadgets';

function App() {
  return (
    <div className='orginContainer'>
      <Navbar></Navbar>
      <Header></Header>
      <Gadgets></Gadgets>
    </div>
  );
}

export default App;
