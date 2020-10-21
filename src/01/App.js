import React, {useState} from 'react';
import './App.css';

//LESSON 1.5 a

// const year = 2100;
// const yearSpecial = () => {
// if((year%4===0 && year%100!==0) || year%400===0) {
//   return 'special year';
// } else {
//   return 'normal year';
// }
// };

//LESSON 1.5 b

const randomNumber = Math.floor(Math.random()*10+1);
// const randomNumber = 6;

function App() {

const [number, setNumber] = useState('');
const [result, setResult] = useState();
const [clicked, setClicked] = useState(false);

const handleChange = (event) => {
  setNumber(Number(event.target.value));
  };

const handleClick = () => {
    setNumber('');
    setClicked(true);
    resultCheck();
  };

  const resultCheck = () => {
    console.log(randomNumber);
    console.log(number);
    if(randomNumber === number) {
      setResult('Gratulacje!');
    } else if(randomNumber < number){
      setResult('Trochę za dużo!');
      }else if(randomNumber > number){
        setResult('Trochę za mało!');
        }
      }
;

  return (
    <div className='App'>
      {/* <div className='zad1'>
        Rok: {year}
        <br/>
        Przestepny? {yearSpecial()}
      </div> */}
      <div className='zad2'>
        Zgadnij liczbę od 1 do 10:
        <br/>
        <input type="number" value={number} onChange={handleChange}/>
        <br/>
        <button onClick={handleClick}>Check!</button>
        <br/>
        {clicked ? result : null}
      </div>

    </div>
  );
}

export default App;
