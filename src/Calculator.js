import './assets/css/Calculator.css'; 
import { useState } from 'react';


const Calculator = () => {

    const [calc, setCalc] = useState(""); 
    const [result, setResult] = useState(""); 

    const operators = ['/', '*', '+', '-', '.']; 

    const updateCalc = (value) => {
        if (
            (operators.includes(value) && calc == '') ||
            (operators.includes(value) && operators.includes(calc.slice(-1)))
        ) {
            return; 
        }
        setCalc(calc + value)

        if (!operators.includes(value)) {
            setResult(eval(calc + value).toString()); 
        }
    }

    const calculate = () => {
        setCalc(eval(calc).toString())
    }

    const deleteLast = () => {
        if (calc =='') {
            return; 
        }
        const value = calc.slice(0, -1)

        setCalc(value); 
    }



    const createDigits =() => {
        const digits = []

        for (let i= 1; i< 10; i++) {
            digits.push(
                <button onClick={() => updateCalc(i.toString())} key= {i}>{i}</button>
            ); 
        }

        return digits 
    }

    return (  

        <div className="calcBigBox">
            <div className="calcLeft">
                Bult-In Calculator
            </div>
            <div className="calcRight">
          
                <div className="calcContainer">
                    <div className="calculator">
                        <div className="calcDisplay">
                        {result? <span>({result})    </span>: ''} {calc || "0"}
                        </div>

                        <div className="calcOperators">
                            <button onClick={()=>updateCalc('/')}>/</button>
                            <button onClick={()=>updateCalc('*')}>*</button>
                            <button onClick={()=>updateCalc('+')}>+</button>
                            <button onClick={()=>updateCalc('-')}>-</button>

                            <button onClick={()=> deleteLast()}>DEL</button>
                        </div>

                        <div className="calcDigits">
                            {createDigits()}
                            <button onClick={()=>updateCalc('0')}>0</button>
                            <button onClick={()=>updateCalc('.')}>.</button>
                            <button onClick={()=>calculate()} >=</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        

    );
}
 
export default Calculator;