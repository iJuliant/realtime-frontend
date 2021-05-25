import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import { Button, Container } from "react-bootstrap";

// WITHOUT REDUX ===========================================================================
function Counter() {

  const [count, setCount] = useState(0);
  // index 0 adalah initial, index 1 adalah untuk memanipulasi index 0
  
  useEffect(() => {
    console.log('GET DATA!')
  }, [])
  // array kosong, effect did mount

  useEffect(() => {
    console.log('Counter updated!')
  }, [count])
  // effect did update terhadap count


  const increaseCounter = () => {
    setCount(count + 1)
  }

  return (
    <>
      <Container className="text-center">
        <Navbar />
        <h1>Counter</h1>
        <hr />
        <h3>{count}</h3>
        <Button variant="primary">-</Button>
        <Button variant="secondary" className="mx-2">
          RESET
        </Button>
        <Button variant="primary"
        onClick={increaseCounter}>+</Button>
      </Container>
    </>
  );
}

export default Counter;

// WITH REDUX ===========================================================================
// function Counter() {
//   return (
//     <>
//       <Container className="text-center">
//         <Navbar />
//         <h1>Counter</h1>
//         <hr />
//         <h3>0</h3>
//         <Button variant="primary">-</Button>
//         <Button variant="secondary" className="mx-2">
//           RESET
//         </Button>
//         <Button variant="primary">+</Button>
//       </Container>
//     </>
//   );
// }

// export default Counter;
