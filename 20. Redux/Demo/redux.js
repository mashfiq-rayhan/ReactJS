import { legacy_createStore as createStore } from 'redux';

const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    };
  }
  return state;
};

const store = createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
