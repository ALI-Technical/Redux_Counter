import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {incNum,decNum} from './Store/actions/index'

function App() {


  const dispatch = useDispatch();
  const state = useSelector( (store) => store.counterReducer );

  return (

    <>
      <div className="main-div">
        <div className="container">
          <h1 className='text-center'>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>
          <div className="quantity">
            <button
              className="quantity__minus"
              title="Decrement"
              onClick={() => dispatch(decNum())} >
              <i className='fas fa-minus'></i></button>
            <p className="quantity__input">{state}</p>
            <button
              className="quantity__plus"
              title="Increment"
              onClick={() => dispatch(incNum())} >
              <i className='fas fa-plus'></i></button>
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
