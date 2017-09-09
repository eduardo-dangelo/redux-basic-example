import { combineReducers } from 'redux';
import ItensList from './reducer_itensList';
import ActiveItem from './reducer_activeItem';
import ActiveForm from './reducer_activeForm';

const rootReducer = combineReducers({
  itens: ItensList,
  activeItem: ActiveItem,
  activeForm: ActiveForm
});

export default rootReducer;