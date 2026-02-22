import App from '/Add';
import Subttraction from '/Subtraction';
import Multiplication from '/Multiplication';
import Division from '/Division';

let Calculator=()=>{
  return(
    <>
    <h1>Calculator App</h1>
    <Add/>
    <Subttraction/>
    <Multiplication/>
    <Division/> 
    </>
  )
}

export default Calculator;