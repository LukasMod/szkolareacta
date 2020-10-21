import React, {useEffect, useState} from 'react';

import './App.css';

// Napisz licznik, który będzie wyświetlał na stronie liczbę sekund, jakie upłynęły od momentu uruchomienia aplikacji. Czyli startujemy od 0, a następnie co jedną sekundę powinniśmy zaktualizować tę liczbę na ekranie.

// --- CLASS ---

class App extends React.Component {

    state ={
        timer: 0,
    }

    componentDidMount() {
        const interval = setInterval( () =>
        this.setState((prevState) => {
            return {
                timer: prevState.timer + 1};
            }), 1000);
                return() => clearInterval(interval);
        }

    render() {
        const {timer} = this.state;

        return (
            <div className='App'>
                <h2>02/02</h2>
                <h3>TIMER</h3>
                <span>{timer}</span>
            </div> );
    }};

// --- FUNCTIONAL ---

// const App = () => {

// const [timer, setTimer] = useState(0);

// useEffect(()=> {
//     const interval = setInterval( () => {
//         setTimer(prevState => prevState+1);
//     }, 1000);
//     return() => clearInterval(interval);
// }
// ,[]);

//     return (
//         <div className='App'>
//             <h2>02/02</h2>
//             <h3>TIMER</h3>
//             <span>{timer}</span>
//         </div> );
// };

export default App;