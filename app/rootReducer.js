import { combineReducers } from 'redux';
import { exampleContainerReducer as example } from '@scenes/ExampleScreen/reducer';
import configureStore from 'app/utils/createStore';
import rootSaga from 'app/rootSaga';
import { searchReducer } from './store/reducer';

export default () => {
  const rootReducer = combineReducers({
    example,
    searchReducer
  });

  return configureStore(searchReducer, rootSaga);
};
