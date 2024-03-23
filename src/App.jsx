import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {

  function handleClick(){
    alert('button clicked');
  }

  function handleClick2(){
    alert('Button 2 Clicked');
  }

  const addToFive = (num) => {
    alert(`${num} + 5. input number is : ${num}
    formula is : input number + 5`);
  }


  return (
    <>
      <h1>Meheraz + React</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      {/* <button onclick="handleClick()">Click Me</button>  <=  HTML method */}    
      <button onClick={handleClick}>Click Me</button>    {/* <= JSX Method   */}
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => {alert('Button 3 Clicked');}}>Third</button>
      <button onClick={() => addToFive(3)}>Add Five</button>
    </>
  )
}

export default App
