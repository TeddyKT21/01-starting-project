import classes from "./Counter.module.css";
import { useSelector, connect, useDispatch } from "react-redux";

const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={() =>{dispatch({type: 'add'})}}>add</button>
        <button onClick={() =>{dispatch({type: 'subtract'})}}>sub</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
