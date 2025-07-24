
//create your first component
import React, {useState, useEffect} from "react";
import Counter from "./Counter.jsx";


const Home = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  const six = Math.floor(counter / 100000) % 10;
  const five = Math.floor(counter / 10000) % 10;
  const four = Math.floor(counter / 1000) % 10;
  const three = Math.floor(counter / 100) % 10;
  const two = Math.floor(counter / 10) % 10;
  const one = counter % 10;

  const reset = () =>{setCounter(0);

  }

    return (
      <div className="text-center">
    <Counter
        one = {one}
        two = {two}
        three = {three}
        four = {four}
        five = {five}
        six = {six}
        />

        <button className="btn btn-danger mt-2" onClick={reset}>
          <strong>Reiniciar</strong>
        </button>
        </div>
 );
};

export default Home;