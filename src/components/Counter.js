import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux'
import useInput from './hooks/use-input';
import { counterActions } from './store/index';


const Counter = () => {

  const {
    valueChangeHandler : amountChangeHandler ,
    valueBlurHandler : amountBlurHandler ,
    value : enteredAmount ,
    reset : resetAmountHandler
} = useInput(value => value.trim() !== '')


  const counter = useSelector(state => state.counter)
  const isShaw = useSelector(state => state.isShawCounter)


  const dispatch = useDispatch()

  const incrementHandler = () => {
    // dispatch({type:'increment'})
    dispatch(counterActions.increment())
  }
  const increaseHandler = () => {
    // dispatch({type:'increase',  enteredAmount})
    dispatch(counterActions.increase(enteredAmount))
    resetAmountHandler()
  }
  const decrementHandler = () => {
    // dispatch({type:'decrement'})
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    // dispatch({type:'toggle'})
    dispatch(counterActions.toggle())
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShaw &&<div className={classes.value}>{counter}</div>}
      <div>
      <button onClick={increaseHandler} >increse by Amount</button>
        <div>
          <input 
          type='number' 
          onChange={amountChangeHandler} 
          onBlur={amountBlurHandler} 
          value={enteredAmount} />
        </div>
        <button onClick={incrementHandler} >increment</button>

        <button onClick={decrementHandler} >decrement</button>
        
       
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
