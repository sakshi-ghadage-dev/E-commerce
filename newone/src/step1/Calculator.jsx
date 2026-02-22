import App from '/Add';
import Subttraction from '/Subtraction';
import Multiplication from '/Multiplication';
import Division from '/Division';

let Calculator=()=>{

  const num1=20;
  const num2=10;
  return(
    <div>
    <h1>Calculator App</h1>
    <Add a={num1} b={num2}/>
    <Subttraction a={num1} b={num2}/>
    <Multiplication a={num1} b={num2}/>
    <Division a={num1} b={num2}/> 
    </div>
  )
}

export default Calculator;