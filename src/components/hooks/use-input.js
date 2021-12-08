import {useState } from "react";

const useInput =(validate) => {
//state value and tuched or not tuched 
    const [enteredValue, setEnteredValue] = useState('')
    const [isTuched , setIsTuched] = useState(false);
//validation 
    const enteredValueIsValid = validate(enteredValue) ;
    const hasError = !enteredValueIsValid && isTuched ;

//change handler 
    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value);
       }
// itha klika 3l input w3awed kilka lbarra ml input ==> lazem ya3ti invalid
// blur handler 
    const valueBlurHandler = (e) => {
        setIsTuched(true)
       }

//reset form     
    const reset = () => {
        setEnteredValue('');
        setIsTuched(false);
        }
    return {
        value : enteredValue ,
        valueChangeHandler,
        valueBlurHandler,
        reset

    }
}
export default useInput